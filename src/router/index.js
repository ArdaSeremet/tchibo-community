import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Community from '../views/Community.vue'
import Kits from '../views/Kits.vue'
import KitDetails from '../views/KitDetails.vue'
import TasteTest from '../views/TasteTest.vue'
import CoffeeCreator from '../views/CoffeeCreator.vue'
import ShoppingCart from '../views/ShoppingCart.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recommendation/:id',
    name: 'Coffee Recommendation',
    component: Home
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/kits',
    name: 'Coffee Kits',
    component: Kits
  },
  {
    path: '/kit/:id',
    name: 'Coffee Kit',
    component: KitDetails
  },
  {
    path: '/taste-test',
    name: 'Taste Test',
    component: TasteTest
  },
  {
    path: '/coffee-creator',
    name: 'Coffee Creator',
    component: CoffeeCreator
  },
  {
    path: '/cart',
    name: 'Shopping Cart',
    component: ShoppingCart
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
