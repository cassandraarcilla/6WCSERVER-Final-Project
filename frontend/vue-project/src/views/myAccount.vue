<template>
  <div class="profile-page-content">
    
    <!-- PROFILE HEADER -->
    <div class="profile-header-card">
      <div class="profile-avatar"></div>
      <div class="profile-details">
        <h2 class="profile-name">{{ userProfile.fullName || 'User' }}</h2>
        <p class="profile-status">{{ userProfile.status || 'Permanent Resident' }}</p>
        <div class="profile-tags">

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
            <span class="value">{{ userProfile.dateOfBirth || 'Not provided' }}</span>
          </div>
        </li>
        <li>
          <img :src="gmailIcon" alt="Email Icon" class="icon-img" />
          <div>
            <span class="label">Email Address</span>
            <span class="value">{{ userProfile.email || 'Not provided' }}</span>
          </div>
        </li>
        <li>
          <img :src="phoneIcon" alt="Phone Icon" class="icon-img" />
          <div>
            <span class="label">Phone Number</span>
            <span class="value">{{ userProfile.contactNumber || 'Not provided' }}</span>
          </div>
        </li>
        <li>
          <img :src="locationIcon" alt="Location Icon" class="icon-img" />
          <div>
            <span class="label">Complete Address</span>
            <span class="value">{{ userProfile.address || 'Not provided' }}</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- DOCUMENT REQUESTS SECTION -->
    <div class="document-requests-wrapper" v-if="!loading && allDocumentRequests.length > 0">
      
      <!-- HEADER -->
      <div class="document-request-header">
        <h3 class="card-title-requests">My Document Requests</h3>
      </div>
      
      <!-- INNER CARDS -->
      <div class="requests-inner">
        <div 
          v-for="request in allDocumentRequests" 
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

          <div v-else-if="request.status === 'Pending'" class="status-alert pending">
            <p>⏳ Pending Review</p>
            <p class="alert-subtext">Your request has been submitted and is awaiting review.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- LOADING STATE -->
    <div v-if="loading" class="loading-message">
      <p>Loading your information...</p>
    </div>

    <!-- NO REQUESTS MESSAGE -->
    <div v-if="!loading && allDocumentRequests.length === 0" class="no-requests-message">
      <p v-if="error">Error: {{ error }}</p>
      <p v-else>No document requests yet. <router-link to="/services">Submit a request</router-link></p>
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

import availableIcon from '@/assets/available.png'; 
import processingIcon from '@/assets/processing.png'; 
import problemIcon from '@/assets/problem.png';       
import pendingIcon from '@/assets/pending.png';       

export default {
  name: 'myAccount',
  data() {
    return {
      dateIcon, gmailIcon, phoneIcon, locationIcon,
      availableIcon, processingIcon, problemIcon, pendingIcon,

      userProfile: {
        fullName: '',
        dateOfBirth: '',
        email: '',
        contactNumber: '',
        address: '',
        status: 'Permanent Resident',
        purok: 'Purok 3',
        maritalStatus: 'Married',
      },

      allDocumentRequests: [],
      loading: true,
      error: null,
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
        case 'Pending':
          return this.pendingIcon;
        default:
          return null;
      }
    },
    logout() {
      console.log('User logged out');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userProfile');
      this.$router.push('/login');
    },
    async fetchUserRequests() {
      try {
        this.loading = true;
        this.error = null;
        
        const userEmail = localStorage.getItem('userEmail');
        
        if (!userEmail) {
          this.error = 'User not identified';
          this.loading = false;
          return;
        }

        const response = await fetch(`http://localhost:5000/api/requests?email=${encodeURIComponent(userEmail)}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch requests');
        }
        
        const data = await response.json();
        console.log('Fetched requests:', data);
        
        this.allDocumentRequests = data.map((request, index) => {
          const requestedDate = new Date(request.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });

          return {
            id: request._id || Date.now() + index,
            type: request.documentTypes && request.documentTypes.length > 0 ? request.documentTypes[0] : 'Document',
            status: request.status || 'Pending',
            requestedDate: requestedDate,
            purpose: request.purpose || 'Submitted via online form',
            completionDate: request.completionDate 
              ? new Date(request.completionDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
              : null,
          };
        });

        if (data.length > 0) {
          const firstRequest = data[0];
          this.userProfile = {
            fullName: firstRequest.fullName || '',
            dateOfBirth: firstRequest.dateOfBirth || '',
            email: firstRequest.email || '',
            contactNumber: firstRequest.contactNumber || '',
            address: firstRequest.address || '',
            status: this.userProfile.status,
            purok: this.userProfile.purok,
            maritalStatus: this.userProfile.maritalStatus,
          };
        }
        
      } catch (err) {
        console.error('Error fetching requests:', err);
        this.error = err.message || 'Failed to load your information';
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.fetchUserRequests();
  }
}
</script>

<style scoped>

/* myAccount.vue */

.loading-message,
.no-requests-message {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0;
  font-size: 1.1rem;
  color: #666;
}

.no-requests-message a {
  color: #510400;
  text-decoration: none;
  font-weight: 600;
}

.no-requests-message a:hover {
  text-decoration: underline;
}

</style>