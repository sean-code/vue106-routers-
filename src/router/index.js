import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id', 
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  // Redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
