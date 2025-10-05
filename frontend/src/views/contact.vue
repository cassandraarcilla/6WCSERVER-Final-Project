<!-- contact.vue -->
<template>
  <div class="contact-page-container">
    <div class="contact-content-box">
      <div class="contact-info-container">
        <h2 class="contact-title">GET IN TOUCH!</h2>
        <p class="contact-text">
          Need help or have suggestions? Reach out to us using the form below or
          through our official contact channels.
        </p>

        <h3 class="contact-subheading">Official Contact</h3>
        <ul class="contact-list">
          <li>
            <img src="@/assets/email.png" alt="Email" class="contact-icon" />
            <span class="contact-list-text">Email: barangay@email.com</span>
          </li>
          <li>
            <img src="@/assets/contact.png" alt="Contact" class="contact-icon" />
            <span class="contact-list-text">Contact: (xxx) xxx-xxxx</span>
          </li>
          <li>
            <img src="@/assets/fb.png" alt="Facebook" class="contact-icon" />
            <span class="contact-list-text">Facebook: Barangay Sto Rosario AC </span>
          </li>
        </ul>
      </div>

      <div class="contact-form-container">
        <form class="contact-form">
          <label for="name" class="sr-only">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Full Name" class="contact-form-input" />

          <label for="email" class="sr-only">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" class="contact-form-input" />

          <label for="contact-number" class="sr-only">Contact Number</label>
          <input type="tel" id="contact-number" name="contact-number" placeholder="Contact Number" class="contact-form-input" />

          <label for="address" class="sr-only">Address</label>
          <input type="text" id="address" name="address" placeholder="Address" class="contact-form-input" />

          <label for="message" class="sr-only">Message</label>
          <textarea id="message" name="message" rows="6" placeholder="Message" class="contact-form-textarea"></textarea>

          <button type="submit" class="contact-submit-btn">SEND</button>
        </form>
      </div>
    </div>

    <footer class="contact-footer">
      <div class="contact-footer-content">
        <h3 class="contact-footer-title">Barangay Hall Address</h3>
        <p class="contact-footer-address">Barangay Sto. Rosario, Angeles City</p>
      </div>
      <div class="contact-map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.404403456347!2d120.58589092373562!3d15.13611956374428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f24f4ae77bf1%3A0xfdab8a67bcd7627!2sSto%20Rosario%20Barangay%20Hall!5e0!3m2!1sen!2sph!4v1758694349590!5m2!1sen!2sph" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this component.
</script>

<style scoped>
/* All styles for this component will be in main.css */
</style>