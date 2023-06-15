import { createRouter, createWebHistory } from 'vue-router'
import blogpage from '../views/blogpage.vue'
import askedquestion from '../views/askedquestion.vue'
import getintouch from '../views/getintouch.vue'
import promotingdutiful from '../views/promotingdutiful.vue'
import otpsendingpage from '../views/otpsendingpage.vue'
import otppage from '../views/otppage.vue'
import forgotpassword from '../views/forgotpassword.vue'
import resetpassword from '../views/resetpassword.vue'
import loginpage from '../views/loginpage.vue'
import getstarted from '../views/getstarted.vue'
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
    {
      path: '/getstarted',
      name: 'getstarted',
      component: getstarted
    },
    {
      path: '/loginpage',
      name: 'loginpage',
      component:loginpage
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
      path: '/promotingdutiful',
      name: 'promotingdutiful',
      component:promotingdutiful
    },
    {
      path: '/getintouch',
      name: 'getintouch',
      component:getintouch
    },
    {
      path: '/askedquestion',
      name: 'askedquestion',
      component:askedquestion
    },
    {
      path: '/blogpage',
      name: 'blogpage',
      component:blogpage
    },
    
   
    // {
    //   path: '/homepages',
    //   name: 'homepages',
    //   component: homepages
    // },
  ]
})

export default router
