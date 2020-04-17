import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import user_login from "@/views/user_login.vue";
import World from "@/views/World.vue";
import person_info_change from "@/views/person_info_change.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user_login',
    name: 'login',
    component: user_login
  },
  {
    path: '/world',
    name: 'World',
    component: World
  },
  {
    path: '/person_info_change',
    name: 'person_info_change',
    component: person_info_change
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
