import { createRouter, createWebHistory } from 'vue-router'
import pricing from '../views/pricing.vue'
import detail from '../views/detail.vue'
import blog from '../views/blog.vue'
import faqs from '../views/faqs.vue'
import contact from '../views/contact.vue'
import affiliate from '../views/affiliate.vue'
import otpsendingpage from '../views/otpsendingpage.vue'
import otppage from '../views/otppage.vue'
import forgotpassword from '../views/forgotpassword.vue'
import resetpassword from '../views/resetpassword.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
import about from '../views/about.vue'
import features from '../views/features.vue'
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
      path: '/features',
      name: 'features',
      component: features
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/login',
      name: 'login',
      component:login
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component:forgotpassword
    },
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component:resetpassword
    },
    {
      path: '/otppage',
      name: 'otppage',
      component:otppage
    },
    {
      path: '/otpsendingpage',
      name: 'otpsendingpage',
      component:otpsendingpage
    },
    {
      path: '/affiliate',
      name: 'affiliate',
      component:affiliate
    },
    {
      path: '/contact',
      name: 'contact',
      component:contact
    },
    {
      path: '/faqs',
      name: 'faqs',
      component:faqs
    },
    {
      path: '/blog',
      name: 'blog',
      component:blog
    },
    {
      path: '/detail',
      name: 'detail',
      component:detail
    },
    {
      path: '/pricing',
      name: 'pricing',
      component:pricing
    },
    
   
    // {
    //   path: '/homepages',
    //   name: 'homepages',
    //   component: homepages
    // },
  ]
})

export default router
