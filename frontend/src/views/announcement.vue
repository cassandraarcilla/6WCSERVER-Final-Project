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
      <div class="announcement-program-box">
        <div class="announcement-program-content">
          <h3 class="announcement-program-title">Free Medical & Dental Checkups</h3>
          <ul class="announcement-program-list">
            <li>Every 1st Saturday of the month at the Barangay Health Center</li>
            <li>Services include checkups, blood pressure screening, dental cleaning, and basic medication.</li>
          </ul>
        </div>
        <div class="announcement-placeholder-image">
          <img src="@/assets/fb.png" alt="Free Medical & Dental Checkups" class="announcement-program-image" />
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
          <img src="@/assets/fb.png" alt="Livelihood Training Programs" class="announcement-program-image" />
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
          <img src="@/assets/fb.png" alt="Sports Events" class="announcement-program-image" />
        </div>
      </div>
    </div>

    <h2 class="announcement-list-heading">Upcoming Events</h2>
    
    <div class="announcement-event-border">
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
      <form class="announcement-report-form">
        <label for="title" class="sr-only">Title of Announcement:</label>
        <input type="text" id="title" name="title" placeholder="Title of Announcement:" class="announcement-form-input" />

        <label for="details" class="sr-only">Details / Description:</label>
        <textarea id="details" name="details" rows="6" placeholder="Details / Description:" class="announcement-form-textarea"></textarea>

        <label for="upload" class="sr-only">Uploading File/Images:</label>
        <input 
          type="file" 
          id="upload" 
          name="upload" 
          accept="image/*" 
          class="announcement-form-file-input"
        />

        <button type="submit" class="announcement-submit-btn">SUBMIT</button>
      </form>
    </div>
  </div>
</template>


<script setup>

</script>
