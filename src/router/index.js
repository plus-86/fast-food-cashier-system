import Vue from 'vue'
import VueRouter from 'vue-router'
import Pos from '@/components/pages/Pos.vue'
import Shop from '@/components/pages/Shop.vue'
import Goods from '@/components/pages/Goods.vue'
import Memberships from '@/components/pages/Memberships.vue'
import Statistics from '@/components/pages/Statistics.vue'
import Settings from '@/components/pages/Settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pos',
    component: Pos
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/Goods',
    name: 'Goods',
    component: Goods
  },
  {
    path: '/Memberships',
    name: 'Memberships',
    component: Memberships
  },
  {
    path: '/Statistics',
    name: 'Statistics',
    component: Statistics
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: Settings
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
