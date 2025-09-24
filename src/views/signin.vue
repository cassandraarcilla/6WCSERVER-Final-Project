<template>
  <div class="auth-page-container">
    <div class="auth-form-box">
      <div class="auth-box-left">
        <img src="@/assets/fb.png" alt="Barangay Welcome Image" class="auth-big-image" />
      </div>

      <div class="auth-box-right">
        <img src="@/assets/fb.png" alt="Barangay Logo" class="auth-small-image" />
        <h1 class="auth-title">Welcome to Barangay Information System!</h1>
        <p class="auth-subtitle">Please log in to your account</p>
        
        <form class="auth-form">
          <label for="email-or-username" class="sr-only">Email Address or Username</label>
          <input type="text" id="email-or-username" name="email-or-username" placeholder="Email Address or Username" class="auth-form-input" />
          
          <label for="password" class="sr-only">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" class="auth-form-input" />
          
          <button type="submit" class="auth-submit-btn">SIGN IN</button>
        </form>
        
        <p class="auth-link-text">
          Don't have an account? 
          <router-link to="/signup" class="auth-link">Sign Up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// You might need to import the image if using <script setup> directly,
// but since the path is '@assets', Vue CLI/Vite usually handles it.
// If not, you'd add:
// import fbImage from '@/assets/fb.png';
// And then use :src="fbImage" in the template.
</script>

<style scoped>
/* All styles for this component are in main.css, as per your comment. */
/* If you need specific styles for auth-big-image or auth-small-image
   that are scoped, you would add them here. */
</style>