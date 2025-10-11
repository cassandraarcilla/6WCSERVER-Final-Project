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
      <!-- Services cards -->
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

      <!-- Request Form -->
      <div class="services-online-form-btn-box">
        <div class="services-subheading">Online Request Form</div>
        <div class="services-online-form">
          <div class="services-form-section">
            <div class="services-subheading-small">Personal Information</div>
            <label for="full-name">Full Name:</label>
            <input type="text" id="full-name" v-model="formData.fullName" />
            <label for="date-of-birth">Date of Birth:</label>
            <input type="date" id="date-of-birth" v-model="formData.dateOfBirth" />
            <label for="address">Address:</label>
            <input type="text" id="address" v-model="formData.address" />
            <label for="contact-number">Contact Number:</label>
            <input type="tel" id="contact-number" v-model="formData.contactNumber" />
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" />
          </div>

          <div class="services-form-section">
            <div class="services-subheading-small">Purpose of Request</div>
            <p>Document Type Requested</p>
            <label v-for="type in documentOptions" :key="type">
              <input type="checkbox" :value="type" v-model="formData.documentTypes" />
              {{ type }}
            </label>
          </div>

          <div class="services-form-section">
            <div class="services-subheading-small">Upload Your Files</div>
            <div class="its_services-subheading-1">
              <p>Please upload your supporting documents for verification:</p>
              <div class="its_services-upload-list">
                <ul>
                  <li>Copy of Valid ID</li>
                  <li>Proof of Address / Supporting Documents</li>
                  <li>Completed Form (if downloaded and filled offline)</li>
                </ul>
              </div>
            </div>
            <input type="file" multiple ref="fileInput" style="display:none" @change="handleFileUpload" />
            <button class="upload-btn" @click.prevent="triggerFileInput">UPLOAD</button>
          </div>

          <button class="submit-btn" @click.prevent="submitForm">Submit Request</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Services",
  data() {
    return {
      formData: {
        fullName: "",
        dateOfBirth: "",
        address: "",
        contactNumber: "",
        email: "",
        documentTypes: [],
        files: [],
      },
      documentOptions: [
        "Barangay Clearance",
        "Certificate of Residency",
        "Certificate of Indigency",
        "Business Permit",
      ],
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      this.formData.files = Array.from(event.target.files);
    },
    async submitForm() {
      if (!this.formData.fullName || !this.formData.email) {
        alert("Please fill in required fields!");
        return;
      }

      try {
        const data = new FormData();
        data.append("fullName", this.formData.fullName);
        data.append("dateOfBirth", this.formData.dateOfBirth);
        data.append("address", this.formData.address);
        data.append("contactNumber", this.formData.contactNumber);
        data.append("email", this.formData.email);
        this.formData.documentTypes.forEach(type => data.append("documentTypes[]", type));
        this.formData.files.forEach(file => data.append("files", file));

        const res = await axios.post("http://localhost:5000/api/requests/upload", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        alert("✅ Request submitted successfully!");
        this.resetForm();
      } catch (err) {
        console.error(err);
        alert("❌ Error submitting request.");
      }
    },
    resetForm() {
      this.formData = {
        fullName: "",
        dateOfBirth: "",
        address: "",
        contactNumber: "",
        email: "",
        documentTypes: [],
        files: [],
      };
      this.$refs.fileInput.value = null;
    },
  },
};
</script>

<style scoped>
/* Style for Submit Request button */
.submit-btn {
  display: block;
  background-color: #510400; /* Dark red background */
  color: #fff;               /* White text */
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1rem auto 0 auto; /* top margin + center horizontally */
}

.submit-btn:hover {
  background-color: #7a1a1a; /* Slightly lighter red on hover */
  transform: scale(1.05);
}

/* Style Upload button to match and center */
.upload-btn {
  display: block;
  background-color: #510400;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.5rem auto 0 auto; /* top margin + center horizontally */
}

.upload-btn:hover {
  background-color: #7a1a1a;
  transform: scale(1.05);
}
</style>

