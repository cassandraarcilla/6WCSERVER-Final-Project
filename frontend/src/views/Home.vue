<template>
  <div class="bg-white text-black">
    <section class="home-header-section">
      <div class="home-title-container">
        <h1 class="home-header-title">
          Barangay Information System
        </h1>
      </div>
      <div class="home-buttons-container">
        <router-link
          to="/signin"
          class="home-sign-in-btn"
        >
          SIGN IN
        </router-link>
        <router-link
          to="/signup"
          class="home-sign-up-btn"
        >
          SIGN UP
        </router-link>
      </div>
    </section>

    <section class="home-welcome-section">
      <div class="home-welcome-content">
        <h2 class="home-welcome-title">Welcome to Your Barangay Information System</h2>
        <p class="home-welcome-text">
          The Barangay Information System is designed to make services more accessible, faster, and transparent for the residents of our community. This platform connects barangay officials and residents in a more efficient way, reducing paperwork and saving time. With just a few clicks, you can request documents, stay updated on announcements, and communicate with your barangay.
        </p>
      </div>
    </section>

    <section class="home-purpose-section">
      <div class="home-purpose-text-container">
        <h2 class="home-purpose-title">Why We Built This System</h2>
        <p class="home-purpose-paragraph">
          For many years, barangay transactions were done manually, leading to long lines, misplaced documents, and delays. This website was created to solve those challenges by providing a centralized digital platform. It ensures that essential services and information are within reach of every resident, anytime and anywhere.
        </p>
        <router-link to="/about" class="home-learn-more-btn">Learn More About Us</router-link>
      </div>
      <img src="@/assets/homePurpose.png" alt="Home Purpose" class="home-purpose-image" />
    </section>

    <section class="home-features-section">
      <h2 class="home-features-title">What We Offer</h2>
      <p class="home-features-subtitle">
        This Barangay Information System provides practical and easy-to-use features for the community:
      </p>
      <ol class="home-features-list">
        <li>
          <strong>Barangay Clearance Request</strong>
          <p>Residents can submit clearance requests online and claim their documents at the barangay hall once approved.</p>
        </li>
        <li>
          <strong>Business Permit Assistance</strong>
          <p>Simplifies the process of applying for or renewing small business permits.</p>
        </li>
        <li>
          <strong>Certificate Processing</strong>
          <p>Apply for important documents like residency certificates or barangay IDs without hassle.</p>
        </li>
        <li>
          <strong>Complaint and Concern Submission</strong>
          <p>Report issues, disputes, or community concerns directly to the barangay for proper action.</p>
        </li>
        <li>
          <strong>Lost and Found Reporting</strong>
          <p>Easily report or claim lost items through the barangay portal.</p>
        </li>
        <li>
          <strong>Event Announcements</strong>
          <p>Stay updated with official announcements, events, and community programs.</p>
        </li>
      </ol>
    </section>

    <section class="home-limitations-section">
      <h2 class="home-limitations-title">Limitations of the System</h2>
      <p class="home-limitations-text">
        While the Barangay Information System improves access and efficiency, it is not meant to replace in-person barangay governance. Some services may still require residents to physically visit the barangay hall for verification, signatures, or document release. The system also focuses only on local barangay-level services and does not handle city-wide or national government transactions.
      </p>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Home",
});
</script>