<template>
  <header class="navbar">
    <div class="nav-container">
      <!-- Logo always visible -->
      <router-link to="/" class="logo-wrapper">
        <img src="@/assets/logo.png" alt="Logo" class="logo-img" />
      </router-link>

      <!-- Navigation links -->
      <nav class="nav-links" v-if="!hideLinks">
        <router-link to="/home" class="nav-item">Home</router-link>
        <router-link to="/about" class="nav-item">About Us</router-link>
        <router-link to="/services" class="nav-item">Services</router-link>
        <router-link to="/announcement" class="nav-item">Announcement</router-link>
        <router-link to="/contact" class="nav-item">Contact</router-link>
        <router-link to="/my-account" class="nav-item">My Account</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  hideLinks: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #510400;
}
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 3rem;
  height: 100%;
}
.logo-wrapper {
  width: 5em;
  height: 5em;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.nav-links {
  display: flex;
  gap: 2rem;
}
.nav-item {
  color: #ECF0F1;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
  font-size: 1.5em;
  border-radius: 10px;
}
.nav-item:hover {
  color: #f7f3e3;
  transform: scale(1.1);
}
</style>
