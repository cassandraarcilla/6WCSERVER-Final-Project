<template>
  <div class="landing-page">
    <!-- HEADER -->
    <section class="landing-header-section">
      <div class="landing-title-container">
        <h1 class="landing-header-title">
          BARANGAY STO. ROSARIO INFORMATION SYSTEM
        </h1>
      </div>
      <div class="landing-buttons-container">
        <router-link to="/signin" class="landing-sign-in-btn">SIGN IN</router-link>
        <router-link to="/signup" class="landing-sign-up-btn">SIGN UP</router-link>
      </div>
    </section>

    <!-- INTRO SECTION -->
    <section class="landing-intro-section">
      <div class="landing-intro-box">
        <h2 class="landing-intro-title">Introducing the Barangay Information System</h2>
        <p class="landing-intro-text">
          Welcome to the Barangay Sto. Rosario Online Portal — your official gateway to reliable, fast, and transparent barangay services.
          Whether you need documents, updates, or community assistance, our portal is here to serve you anytime, anywhere.
        </p>
      </div>
    </section>

    <!-- QUICK ACCESS -->
    <section class="landing-access-section">
      <div class="landing-access-text">
        <h2 class="landing-access-title">Quick Access</h2>
        <ul class="landing-access-list">
          <li>Sign In – For registered residents</li>
          <li>Sign Up – Create a resident account</li>
          <li>Explore Services – View our offerings</li>
        </ul>
        <router-link to="/about" class="landing-learn-more-btn">Learn More About Us</router-link>
      </div>
      <div class="landing-access-image">
        <img src="@/assets/homePurpose.png" alt="Quick Access Image" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
};
</script>

