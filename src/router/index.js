import { createRouter, createWebHistory } from 'vue-router'
import aboutDutiful from '../views/aboutDutiful.vue'
import AboutView from '../views/AboutView.vue'
import homePage from '../views/homePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/AboutView',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '/aboutDutiful',
      name: 'aboutDutiful',
      component: aboutDutiful
    },
   
    // {
    //   path: '/homepages',
    //   name: 'homepages',
    //   component: homepages
    // },
  ]
})

export default router
