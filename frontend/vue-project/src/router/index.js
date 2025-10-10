import { createRouter, createWebHistory } from 'vue-router'

// Import pages
import Home from '../views/Home.vue'
import Landing from '../views/landing.vue'
import AboutUs from '../views/aboutUs.vue'
import Services from '../views/services.vue'
import Announcement from '../views/announcement.vue'
import Contact from '../views/contact.vue'
import MyAccount from '../views/myAccount.vue'
import SignIn from '../views/signin.vue'
import SignUp from '../views/signup.vue'

const routes = [
  { path: '/', name: 'Landing', component: Landing },
  { path: '/home', name: 'Home', component: Home },    
  { path: '/about', name: 'AboutUs', component: AboutUs },
  { path: '/services', name: 'Services', component: Services },
  { path: '/announcement', name: 'Announcement', component: Announcement },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/my-account', name: 'MyAccount', component: MyAccount },
  { path: '/signin', name: 'SignIn', component: SignIn },
  { path: '/signup', name: 'SignUp', component: SignUp }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
