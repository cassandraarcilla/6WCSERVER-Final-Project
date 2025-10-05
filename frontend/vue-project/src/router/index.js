import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import Services from '../views/Services.vue'
import Announcement from '../views/Announcement.vue'
import Contact from '../views/Contact.vue'
import Signin from '../views/Signin.vue' // Import the new Signin component
import Signup from '../views/Signup.vue' // Import the new Signup component

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'AboutUs', component: AboutUs },
  { path: '/services', name: 'Services', component: Services },
  { path: '/announcement', name: 'Announcement', component: Announcement },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/signin', name: 'Signin', component: Signin }, // Add the new sign-in route
  { path: '/signup', name: 'Signup', component: Signup }, // Add the new sign-up route
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router