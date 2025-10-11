<template>
  <div class="auth-page-container">
    <div class="auth-form-box">
      <div class="auth-box-left">
        <img
          src="@/assets/brgy.png"
          alt="Barangay Welcome Image"
          class="auth-big-image"
        />
      </div>

      <div class="auth-box-right">
        <img
          src="@/assets/logo.png"
          alt="Barangay Logo"
          class="auth-small-image"
        />
        <h1 class="auth-title">Welcome to Barangay Information System!</h1>
        <p class="auth-subtitle">Please log in to your account</p>

        <!-- ✅ Connected form -->
        <form class="auth-form" @submit="handleSubmit">
          <label for="email-or-username" class="sr-only">Email Address or Username</label>
          <input
            type="text"
            id="email-or-username"
            name="email-or-username"
            placeholder="Email Address or Username"
            class="auth-form-input"
            v-model="emailOrUsername"
          />

          <label for="password" class="sr-only">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            class="auth-form-input"
            v-model="password"
          />

          <button type="submit" class="auth-submit-btn">SIGN IN</button>
        </form>

        <!-- ✅ Error display -->
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

        <p class="auth-link-text">
          Don't have an account?
          <router-link to="/signup" class="auth-link">Sign Up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const emailOrUsername = ref("");
const password = ref("");
const errorMessage = ref("");

const handleSubmit = async (e) => {
  e.preventDefault();
  errorMessage.value = "";

  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      emailOrUsername: emailOrUsername.value,
      password: password.value,
    });

    // Save token to localStorage
    localStorage.setItem("token", res.data.token);

    alert("Login successful!");
    router.push("/Home"); // redirect after login
  } catch (err) {
    errorMessage.value =
      err.response?.data?.message || "Something went wrong.";
  }
};
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
  font-size: 0.9rem;
  text-align: center;
}

/* Other styles already in main.css */
</style>