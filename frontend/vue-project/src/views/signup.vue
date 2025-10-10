<template>
  <div class="signup-page-container">
    <div class="reg-wrapper">
      <div class="reg-header-text">
        <h1 class="reg-title">Create Your Barangay Information System Account</h1>
        <p class="reg-subtitle">
          Signing up gives you access to online services such as document requests,
          announcements, and community updates. Please fill in your details accurately.
        </p>
      </div>

      <div class="reg-form-box">
        <form class="reg-form" @submit="handleSubmit">
          <!-- PERSONAL INFORMATION -->
          <div class="reg-section">
            <div class="reg-section-label">PERSONAL INFORMATION</div>

            <div class="reg-form-group">
              <label for="fullname" class="reg-form-label">Full Name:</label>
              <input v-model="fullname" type="text" id="fullname" class="reg-input" required />
            </div>

            <div class="reg-form-group">
              <label for="dob" class="reg-form-label">Date of Birth:</label>
              <input v-model="dob" type="date" id="dob" class="reg-input" required />
            </div>

            <div class="reg-form-group">
              <label class="reg-form-label_2">Gender:</label>
              <div class="reg-gender-options">
                <label class="radio-label">
                  <input v-model="gender" type="radio" name="gender" value="male" class="reg-radio" /> Male
                </label>
                <label class="radio-label">
                  <input v-model="gender" type="radio" name="gender" value="female" class="reg-radio" /> Female
                </label>
                <label class="radio-label">
                  <input v-model="gender" type="radio" name="gender" value="other" class="reg-radio" /> Other
                </label>
              </div>
            </div>
          </div>

          <!-- ADDRESS DETAILS -->
          <div class="reg-section">
            <div class="reg-section-label">ADDRESS DETAILS</div>

            <div class="reg-form-group">
              <label for="street" class="reg-form-label">House No. / Street:</label>
              <input v-model="street" type="text" id="street" class="reg-input" required />
            </div>

            <div class="reg-two-columns">
              <div class="reg-form-group col-half">
                <label for="barangay" class="reg-form-label">Barangay:</label>
                <input v-model="barangay" type="text" id="barangay" class="reg-input" required />
              </div>
              <div class="reg-form-group col-half">
                <label for="city" class="reg-form-label">City / Municipality:</label>
                <input v-model="city" type="text" id="city" class="reg-input" required />
              </div>
            </div>
          </div>

          <!-- ACCOUNT DETAILS -->
          <div class="reg-section_2">
            <div class="reg-section-label">ACCOUNT DETAILS</div>

            <div class="reg-form-group">
              <label for="username" class="reg-form-label">Username:</label>
              <input v-model="username" type="text" id="username" class="reg-input" required />
            </div>

            <div class="reg-form-group">
              <label for="password" class="reg-form-label">Password:</label>
              <input v-model="password" type="password" id="password" class="reg-input" required />
            </div>

            <div class="reg-form-group">
              <label for="confirm-password" class="reg-form-label">Confirm Password:</label>
              <input
                v-model="confirmPassword"
                type="password"
                id="confirm-password"
                class="reg-input"
                required
              />
            </div>
          </div>

          <!-- AGREEMENTS -->
          <div class="reg-agreements">
            <label class="reg-agreement-label">
              <input v-model="agreeInfo" type="checkbox" class="reg-checkbox" />
              I certify that the information I have provided is true and correct.
            </label>
            <label class="reg-agreement-label">
              <input v-model="agreeTerms" type="checkbox" class="reg-checkbox" />
              I agree to the terms and conditions of the Barangay Information System.
            </label>
          </div>

          <!-- ACTION BUTTONS -->
          <div class="reg-form-actions">
            <button type="reset" class="reg-btn-reset">RESET</button>
            <button type="submit" class="reg-btn-submit">SUBMIT</button>
          </div>

          <!-- ERROR MESSAGE -->
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

          <p class="reg-login-text">
            Already have an account?
            <router-link to="/signin" class="reg-login-link">[ Sign In Here ]</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

// form fields
const fullname = ref("");
const dob = ref("");
const gender = ref("");
const street = ref("");
const barangay = ref("");
const city = ref("");
const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const agreeInfo = ref(false);
const agreeTerms = ref(false);
const errorMessage = ref("");

const handleSubmit = async (e) => {
  e.preventDefault();
  errorMessage.value = "";

  if (password.value !== confirmPassword.value) {
    errorMessage.value = "Passwords do not match.";
    return;
  }

  if (!agreeInfo.value || !agreeTerms.value) {
    errorMessage.value = "Please agree to the terms and confirm your information.";
    return;
  }

  try {
    const res = await axios.post("http://localhost:5000/api/auth/register", {
      fullname: fullname.value,
      dob: dob.value,
      gender: gender.value,
      street: street.value,
      barangay: barangay.value,
      city: city.value,
      username: username.value,
      password: password.value,
    });

    alert("Registration successful! Please sign in.");
    router.push("/signin");
  } catch (err) {
    errorMessage.value =
      err.response?.data?.message || "Something went wrong. Please try again.";
  }
};

onMounted(() => {
  document.body.style.backgroundColor = "#a27373";
});
onUnmounted(() => {
  document.body.style.backgroundColor = "";
});
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
}
</style>
