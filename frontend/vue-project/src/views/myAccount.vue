<template>
  <div class="profile-page-content">
    
    <!-- PROFILE HEADER -->
    <div class="profile-header-card">
      <div class="profile-avatar"></div>
      <div class="profile-details">
        <h2 class="profile-name">Juan S. Dela Cruz</h2>
        <p class="profile-status">Permanent Resident</p>
        <div class="profile-tags">
          <span class="tag tag-purok">Purok 3</span>
          <span class="tag tag-married">Married</span>
        </div>
      </div>
    </div>
    
    <!-- PERSONAL INFORMATION -->
    <div class="info-card personal-info-card">
      <h3 class="card-title">Personal Information</h3>
      <ul class="info-list">
        <li>
          <img :src="dateIcon" alt="Date Icon" class="icon-img" />
          <div>
            <span class="label">Date of Birth</span>
            <span class="value">May 15, 1990</span>
          </div>
        </li>
        <li>
          <img :src="gmailIcon" alt="Email Icon" class="icon-img" />
          <div>
            <span class="label">Email Address</span>
            <span class="value">juan.delacrus@gmail.com</span>
          </div>
        </li>
        <li>
          <img :src="phoneIcon" alt="Phone Icon" class="icon-img" />
          <div>
            <span class="label">Phone Number</span>
            <span class="value">+63 912 345 6789</span>
          </div>
        </li>
        <li>
          <img :src="locationIcon" alt="Location Icon" class="icon-img" />
          <div>
            <span class="label">Complete Address</span>
            <span class="value">Block 5 Lot 10, Purok 3, Barangay Sto. Rosario</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- DOCUMENT REQUESTS SECTION -->
    <div class="document-requests-wrapper" v-if="documentRequests.length">
      
      <!-- HEADER -->
      <div class="document-request-header">
        <h3 class="card-title-requests">My Document Requests</h3>
      </div>
      
      <!-- INNER CARDS -->
      <div class="requests-inner">
        <div 
          v-for="request in documentRequests" 
          :key="request.id" 
          class="request-card fieldset-style"
        >
          <div class="request-main-content">
            <img 
              :src="getIconForStatus(request.status)" 
              alt="Status Icon" 
              class="request-icon" 
            />
            <div class="request-details">
              <h4>{{ request.type }}</h4>
              <p>Requested: {{ request.requestedDate }}</p>
              <p class="purpose">Purpose: {{ request.purpose }}</p>
            </div>
            <span 
              :class="['status-tag', request.status.toLowerCase()]"
            >
              {{ request.status }}
            </span>
          </div>

          <div v-if="request.status === 'Available'" class="status-alert ready">
            <p>✔ Ready for Claiming on {{ request.completionDate }}</p>
            <p class="alert-subtext">Please bring a valid ID when claiming your document.</p>
          </div>
          
          <div v-else-if="request.status === 'Processing'" class="status-alert processing">
            <p>
              <img :src="pendingIcon" alt="Pending Icon" class="inline-alert-icon" /> 
              Estimated completion: {{ request.completionDate }}
            </p>
            <p class="alert-subtext">Your document is currently being processed.</p>
          </div>
          
          <div v-else-if="request.status === 'Problem'" class="status-alert problem">
            <p>⚠ Action Required</p>
            <p class="alert-subtext">Additional documents required. Please contact the barangay office.</p>
          </div>
        </div>
      </div>
    </div>
      <!-- LOGOUT BUTTON -->
        <div class="logout-container">
          <button class="logout-button" @click="logout">Log Out</button>
        </div>
      </div>
    </template>

<script>
import dateIcon from '@/assets/myAcc_date_icon.png';
import gmailIcon from '@/assets/myAcc_gmail_icon.png';
import phoneIcon from '@/assets/myAcc_phone_icon.png';
import locationIcon from '@/assets/myAcc_location_icon.png';

// Icons for request statuses
import availableIcon from '@/assets/available.png'; 
import processingIcon from '@/assets/processing.png'; 
import problemIcon from '@/assets/problem.png';       
import pendingIcon from '@/assets/pending.png';       

export default {
  name: 'myAccount',
  data() {
    return {
      // Icons
      dateIcon, gmailIcon, phoneIcon, locationIcon,
      availableIcon, processingIcon, problemIcon, pendingIcon,

      // Document Requests Dummy Data
      documentRequests: [
        { id: 1, type: 'Barangay Clearance', status: 'Available', requestedDate: 'October 15, 2025', purpose: 'Employment requirement', completionDate: 'October 18, 2025' },
        { id: 2, type: 'Certificate of Residency', status: 'Processing', requestedDate: 'October 1, 2025', purpose: 'Bank requirement', completionDate: 'October 18, 2025' },
        { id: 3, type: 'Certificate of Indigency', status: 'Problem', requestedDate: 'October 5, 2025', purpose: 'Medical assistance', completionDate: null },
      ],
    }
  },
  methods: {
    getIconForStatus(status) {
      switch (status) {
        case 'Available':
          return this.availableIcon;
        case 'Processing':
          return this.processingIcon;
        case 'Problem':
          return this.problemIcon;
        default:
          return null;
      }
    },
      logout() {
    // Replace with your actual logout logic
    console.log('User logged out');
    // Example: redirect to login page
    this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

/* myAccount.vue */

</style>
