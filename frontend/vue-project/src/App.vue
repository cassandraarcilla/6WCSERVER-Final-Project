<template>
  <div>
    <Navbar />
    <main>
      <router-view />
    </main>

    <footer class="home-footer-section">
      <div class="home-footer-content">
        <div class="home-footer-contact-info">
          <h3 class="home-footer-heading">Contact Info:</h3>
          <p>Barangay Hall, Sto. Rosario</p>
          <p>brgystorosarioacph2021@gmail.com | 0945-600-2470 </p>
        </div>

        <div class="home-footer-follow-us">
          <h3 class="home-footer-heading">Follow Us:</h3>
          <p>Facebook: Barangay Sto Rosario AC</p>
          <p>Instagram: @brgystorosarioac</p>
        </div>
      </div>

      <p class="home-footer-copyright">
        2025 Barangay Sto. Rosario – All Rights Reserved
      </p>
    </footer>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Navbar from './components/Navbar.vue'

const route = useRoute()
const isLandingPage = computed(() => route.path === '/')
</script>