import Vue from 'vue'
import VueRouter from 'vue-router'
import Tab from './Tab.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/tab', component: Tab }
  ]
})

export default router