import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/aboutUs.vue'
import Services from '../views/services.vue'
import Announcement from '../views/announcement.vue'
import Contact from '../views/contact.vue'
import Signin from '../views/signin.vue' // Import the new Signin component
import Signup from '../views/signup.vue' // Import the new Signup component

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