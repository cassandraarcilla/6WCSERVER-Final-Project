<template>
  <div>
    <div class="services-intro-wrapper">
      <div class="services-intro-full-width">
        <div class="services-intro-content">
          <p class="services-intro-text">
            Welcome to the Barangay Services page. Our goal is to make your
            requests faster, easier, and more convenient. Here, you can find the
            list of services we offer, the requirements for each, and the option
            to submit your documents online. Whether you need a clearance,
            certificate, or assistance, this page is your one-stop solution.
          </p>
        </div>
      </div>
    </div>

    <div class="services-page-container">
      <div class="services-how-can-we-help-box">
        <div class="services-subheading">How Can We Help You?</div>
        <div class="service-card">
          <div class="service-title">Barangay Clearance</div>
          <div class="service-description">Apply online for employment, legal, or government requirements.</div>
        </div>
        <div class="service-card">
          <div class="service-title">Certificate of Indigency</div>
          <div class="service-description">Request certification for scholarships, financial assistance, or medical aid.</div>
        </div>
        <div class="service-card">
          <div class="service-title">Business Permit Assistance</div>
          <div class="service-description">Apply for or renew business permits in the barangay.</div>
        </div>
        <div class="service-card">
          <div class="service-title">Community Programs</div>
          <div class="service-description">Access free health checkups, training sessions, and livelihood support.</div>
        </div>
        <div class="service-card">
          <div class="service-title">Support Requests and Complaints</div>
          <div class="service-description">Report community concerns or ask for assistance.</div>
        </div>
      </div>
      
      <fieldset class="services-request-document-box">
        <legend class="services-subheading">Request Your Document</legend>
        <ul class="requirements-list">
          <li>
            <p class="requirement-title">Barangay Clearance</p>
            <ul>
              <li>Valid Government-issued ID</li>
              <li>Proof of Residence (utility bill, barangay ID, lease agreement)</li>
            </ul>
          </li>
          <li>
            <p class="requirement-title">Certificate of Indigency</p>
            <ul>
              <li>Barangay Clearance</li>
              <li>Valid ID of the applicant or guardian</li>
            </ul>
          </li>
          <li>
            <p class="requirement-title">Business Permit Assistance</p>
            <ul>
              <li>DTI or SEC Registration</li>
              <li>Mayor’s Permit (for renewals)</li>
              <li>Previous Barangay Clearance</li>
            </ul>
          </li>
        </ul>
      </fieldset>
      <div class="services-online-form-btn-box">
        <div class="services-subheading">Online Request Form</div>
        <div class="services-online-form">
          <div class="services-form-section">
            <div class="services-subheading-small">Personal Information</div>
            <label for="full-name">Full Name:</label>
            <input type="text" id="full-name" />
            <label for="date-of-birth">Date of Birth:</label>
            <input type="date" id="date-of-birth" />
            <label for="address">Address:</label>
            <input type="text" id="address" />
            <label for="contact-number">Contact Number:</label>
            <input type="tel" id="contact-number" />
            <label for="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div class="services-form-section">
            <div class="services-subheading-small">Purpose of Request</div>
            <p>Document Type Requested</p>
            <label>
              <input type="checkbox" name="document-type" value="Barangay Clearance" />
              Barangay Clearance
            </label>
            <label>
              <input type="checkbox" name="document-type" value="Certificate of Residency" />
              Certificate of Residency
            </label>
            <label>
              <input type="checkbox" name="document-type" value="Certificate of Indigency" />
              Certificate of Indigency
            </label>
            <label>
              <input type="checkbox" name="document-type" value="Business Permit" />
              Business Permit
            </label>
          </div>
          <div class="services-form-section">
            <div class="services-subheading-small">Upload Your Files</div>
            <p>Please upload your supporting documents for verification:</p>
            <ul class="upload-list">
              <li>Copy of Valid ID</li>
              <li>Proof of Address / Supporting Documents</li>
              <li>Completed Form (if downloaded and filled offline)</li>
            </ul>
            <button class="upload-btn">UPLOAD</button>
          </div>
        </div>
      </div>
      
      <div class="services-notes-box">
        <div class="services-subheading_1">Notes and Processing Time</div>
        <ul class="notes-list">
          <li>Processing takes 1 to 3 working days depending on the request.</li>
          <li>Pick-up is available at the Barangay Hall during office hours: Monday to Friday, 8:00 AM – 5:00 PM.</li>
          <li>For urgent requests, please call or email the barangay office directly.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>