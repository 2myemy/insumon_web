import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/aboutTeam',
      name: 'aboutTeam',
      component: () => import(/* webpackChunkName: "about" */ './views/AboutTeam.vue')
    },
    {
      path: '/ComingSoon',
      name: 'ComingSoon',
      component: () => import(/* webpackChunkName: "about" */ './views/ComingSoon.vue')
    }
  ]
})
