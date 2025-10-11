<template>
  <div class="announcement-page-container">
    <header class="announcement-header-section">
      <h1 class="announcement-main-title">
        Stay Updated with the Latest News, Activities, and Programs in Barangay Sto. Rosario.
      </h1>
      <p class="announcement-sub-text">
        This page is your source for community updates, official announcements, and events that matter to every resident. We encourage you to check regularly so you don't miss important information.
      </p>
    </header>

    <!-- All your Current Programs and Upcoming Events sections remain unchanged -->
    <div class="announcement-promo-card">
      <div class="announcement-promo-border">
        <h3 class="announcement-promo-title">Barangay Fiesta 2025</h3>
        <ul class="announcement-promo-list">
          <li><b>Date:</b> October 10–12, 2025</li>
          <li><b>Venue:</b> Barangay Plaza</li>
          <li><b>Details:</b> A three-day celebration with cultural activities, food stalls, and community performances. Join us as we strengthen unity and showcase our heritage.</li>
        </ul>
      </div>
    </div>

    <h2 class="announcement-list-heading">Current Programs</h2>
    <div class="announcement-program-border">
      <!-- Current Programs content here (unchanged) -->
      <div class="announcement-program-box">
        <div class="announcement-program-content">
          <h3 class="announcement-program-title">Free Medical & Dental Checkups</h3>
          <ul class="announcement-program-list">
            <li>Every 1st Saturday of the month at the Barangay Health Center</li>
            <li>Services include checkups, blood pressure screening, dental cleaning, and basic medication.</li>
          </ul>
        </div>
        <div class="announcement-placeholder-image">
          <img src="@/assets/free_med 1.png" alt="Free Medical & Dental Checkups" class="announcement-program-image" />
        </div>
      </div>

      <div class="announcement-livelihood-box">
        <div class="announcement-program-content">
          <h3 class="announcement-program-title">Livelihood Training Programs</h3>
          <ul class="announcement-program-list">
            <li>Ongoing workshops on tailoring, food processing, and digital skills.</li>
            <li>Open to all residents. Registration at the barangay office.</li>
          </ul>
        </div>
        <div class="announcement-placeholder-image">
          <img src="@/assets/livelihood_prog 1.png" alt="Livelihood Training Programs" class="announcement-program-image" />
        </div>
      </div>

      <div class="announcement-program-box">
        <div class="announcement-program-content">
          <h3 class="announcement-program-title">Sports Events</h3>
          <ul class="announcement-program-list">
            <li>Inter-barangay basketball league starting October.</li>
            <li>Schedule and team list to be posted soon.</li>
          </ul>
        </div>
        <div class="announcement-placeholder-image">
          <img src="@/assets/sports_event 1.png" alt="Sports Events" class="announcement-program-image" />
        </div>
      </div>
    </div>

    <h2 class="announcement-list-heading">Upcoming Events</h2>
    <div class="announcement-event-border">
      <!-- Upcoming Events content here (unchanged) -->
      <div class="announcement-event-box">
        <h3 class="announcement-event-title">Solo Parent Meeting</h3>
        <ul class="announcement-event-list">
          <li><b>Date:</b> Sept. 25, 2025</li>
          <li><b>Venue:</b> Barangay Hall</li>
          <li><b>Details:</b> Orientation on solo parent benefits and upcoming community support programs.</li>
        </ul>
      </div>

      <div class="announcement-event-box">
        <h3 class="announcement-event-title">Barangay Fiesta 2025</h3>
        <ul class="announcement-event-list">
          <li><b>Date:</b> October 10–12, 2025</li>
          <li><b>Venue:</b> Barangay Plaza</li>
          <li><b>Details:</b> A three-day celebration with cultural activities, food stalls, and community performances. Join us as we strengthen unity and showcase our heritage.</li>
        </ul>
      </div>

      <div class="announcement-event-box">
        <h3 class="announcement-event-title">Clean-Up Drive</h3>
        <ul class="announcement-event-list">
          <li><b>Date:</b> Oct. 3, 2025</li>
          <li><b>Venue:</b> Starting point at Barangay Plaza</li>
          <li><b>Details:</b> Residents are invited to join in cleaning streets and public areas to promote a greener barangay.</li>
        </ul>
      </div>

      <div class="announcement-event-box">
        <h3 class="announcement-event-title">Christmas Outreach Program</h3>
        <ul class="announcement-event-list">
          <li><b>Date:</b> Dec. 20, 2025</li>
          <li><b>Venue:</b> Barangay Covered Court</li>
          <li><b>Details:</b> Gift-giving and feeding program for children and senior citizens. Volunteers welcome.</li>
        </ul>
      </div>
    </div>

    <h2 class="announcement-report-heading">Quick Report / Submit Announcement</h2>

    <div class="announcement-report-section">
      <p class="announcement-report-subtext">
        Residents can suggest or report announcements (with barangay staff approval).
      </p>
      <!-- Form with Vue + Axios functionality -->
      <form class="announcement-report-form" @submit.prevent="submitAnnouncement">
        <input
          type="text"
          v-model="form.title"
          placeholder="Title of Announcement:"
          class="announcement-form-input"
          required
        />
        <textarea
          v-model="form.details"
          rows="6"
          placeholder="Details / Description:"
          class="announcement-form-textarea"
          required
        ></textarea>
        <input
          type="file"
          ref="fileInput"
          accept="image/*"
          class="announcement-form-file-input"
          @change="handleFileUpload"
        />
        <button type="submit" class="announcement-submit-btn">SUBMIT</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const form = ref({
  title: "",
  details: "",
  file: null,
});

const fileInput = ref(null);

const handleFileUpload = (e) => {
  form.value.file = e.target.files[0];
};

const submitAnnouncement = async () => {
  if (!form.value.title || !form.value.details) {
    alert("Please fill in all required fields!");
    return;
  }

  try {
    const data = new FormData();
    data.append("title", form.value.title);
    data.append("details", form.value.details);
    if (form.value.file) data.append("file", form.value.file);

    await axios.post("http://localhost:5000/api/announcements", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("✅ Announcement submitted successfully!");
    form.value.title = "";
    form.value.details = "";
    form.value.file = null;
    fileInput.value.value = null;
  } catch (err) {
    console.error("Error submitting announcement:", err);
    alert("❌ Error submitting announcement.");
  }
};
</script>
