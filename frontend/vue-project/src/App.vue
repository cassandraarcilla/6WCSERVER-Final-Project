<template>
  <div>
    <!-- Navbar always visible -->
    <Navbar :hide-links="hideNavLinks" />

    <!-- Main content -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="home-footer-section">
      <div class="home-footer-content">
        <div class="home-footer-contact-info">
          <h3 class="home-footer-heading">Contact Info:</h3>
          <p>Barangay Hall, Sto. Rosario</p>
          <p>brgystorosarioacph2021@gmail.com | 0945-600-2470</p>
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

// Pages where nav links should be hidden
const hideRoutes = ['/', '/login', '/signup','/signin']
const hideNavLinks = computed(() => hideRoutes.includes(route.path))
</script>

<style scoped>
.home-footer-section {
  background-color: #510400;
  color: #ECF0F1;
  padding: 2rem 3rem;
  text-align: center;
}
.home-footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.home-footer-heading {
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.home-footer-contact-info, .home-footer-follow-us {
  margin: 1rem 0;
}
.home-footer-copyright {
  font-size: 0.9rem;
}
</style>
