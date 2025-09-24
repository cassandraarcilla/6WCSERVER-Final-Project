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
        <form class="reg-form">
          <div class="reg-section">
            <div class="reg-section-label">PERSONAL INFORMATION</div>

            <div class="reg-form-group">
              <label for="fullname" class="reg-form-label">Full Name:</label>
              <input type="text" id="fullname" class="reg-input" />
            </div>

            <div class="reg-form-group">
              <label for="dob" class="reg-form-label">Date of Birth:</label>
              <input type="date" id="dob" class="reg-input" />
            </div>

            <div class="reg-form-group">
              <label class="reg-form-label_2">Gender:</label>
              <div class="reg-gender-options">
                <label class="radio-label">
                  <input type="radio" name="gender" value="male" class="reg-radio" /> Male
                </label>
                <label class="radio-label">
                  <input type="radio" name="gender" value="female" class="reg-radio" /> Female
                </label>
                <label class="radio-label">
                  <input type="radio" name="gender" value="other" class="reg-radio" /> Other
                </label>
              </div>
            </div>
          </div>

          <div class="reg-section">
            <div class="reg-section-label">ADDRESS DETAILS</div>

            <div class="reg-form-group">
              <label for="street" class="reg-form-label">House No. / Street:</label>
              <input type="text" id="street" class="reg-input" />
            </div>

            <div class="reg-two-columns">
              <div class="reg-form-group col-half">
                <label for="barangay" class="reg-form-label">Barangay:</label>
                <input type="text" id="barangay" class="reg-input" />
              </div>
              <div class="reg-form-group col-half">
                <label for="city" class="reg-form-label">City / Municipality:</label>
                <input type="text" id="city" class="reg-input" />
              </div>
            </div>
          </div>

          <div class="reg-section_2">
            <div class="reg-section-label">PERSONAL INFORMATION</div>

            <div class="reg-form-group">
              <label for="username" class="reg-form-label">Username:</label>
              <input type="text" id="username" class="reg-input" />
            </div>

            <div class="reg-form-group">
              <label for="password" class="reg-form-label">Password:</label>
              <input type="password" id="password" class="reg-input" />
            </div>

            <div class="reg-form-group">
              <label for="confirm-password" class="reg-form-label">Confirm Password:</label>
              <input type="password" id="confirm-password" class="reg-input" />
            </div>
          </div>

          <div class="reg-agreements">
            <label class="reg-agreement-label">
              <input type="checkbox" class="reg-checkbox" />
              I certify that the information I have provided is true and correct.
            </label>
            <label class="reg-agreement-label">
              <input type="checkbox" class="reg-checkbox" />
              I agree to the terms and conditions of the Barangay Information System.
            </label>
          </div>

          <div class="reg-form-actions">
            <button type="reset" class="reg-btn-reset">RESET</button>
            <button type="submit" class="reg-btn-submit">SUBMIT</button>
          </div>

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
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  document.body.style.backgroundColor = '#a27373';
});

onUnmounted(() => {
  document.body.style.backgroundColor = ''; // Reset the background color
});
</script>

