<template>
  <header class="navbar">
    <div class="nav-container">
      <router-link to="/" class="logo-wrapper">
        <img src="@/assets/logo.png" alt="Logo" class="logo-img" />
      </router-link>

      <nav class="nav-links">
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/about" class="nav-item">About Us</router-link>
        <router-link to="/services" class="nav-item">Services</router-link>
        <router-link to="/announcement" class="nav-item">Announcement</router-link>
        <router-link to="/contact" class="nav-item">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>

/* --- Navbar --- *//* --- Navbar --- */
.navbar {
  position: sticky; /* Makes the navbar sticky */
  top: 0; /* Sticks it to the top */
  z-index: 1000; /* Ensures it's on top of other content */
  background-color: #510400; /* Sets the maroon background color */
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;   /* reduced padding */
  padding-right: 30px;  /* reduced padding */
  height: 100px;
  width: 100%;
  box-sizing: border-box; /* ensures padding doesn't push content out */
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
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: nowrap;   /* prevent wrapping */
  flex-shrink: 1;      /* allow shrinking if space is tight */
}

.nav-item {
  color: white; /* Text color is white */
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 25px;
  padding: 10px; /* Add padding for a larger clickable area */
  border-radius: 10px;
}

.nav-item:hover {
  background-color: transparent; /* Remove background color on hover */
  color: #f7f3e3; /* Change text color to light beige on hover */
  transform: scale(1.1); /* Slightly enlarge the link on hover for a subtle effect */
}
</style>