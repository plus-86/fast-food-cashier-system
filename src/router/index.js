import Vue from 'vue'
import VueRouter from 'vue-router'
import Pos from '@/components/pages/Pos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pos',
    component: Pos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
