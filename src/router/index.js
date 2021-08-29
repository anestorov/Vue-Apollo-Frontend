import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '@/views/LogIn.vue'
import { authGuard } from './authGuard.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn,
  },
  {
    path: '/',
    name: 'Home',
    beforeEnter: authGuard,
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    beforeEnter: authGuard,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
