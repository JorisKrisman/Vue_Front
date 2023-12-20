import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BeerView from '../views/Beers/View.vue'
import BeerCreate from '../views/Beers/Create.vue'
import BeerEdit from '../views/Beers/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/beers',
      name: 'beers',
      component: BeerView
    },
    {
      path: '/beers/create',
      name: 'beerCreate',
      component: BeerCreate
    },
    {
      path: '/beers/:id/edit',
      name: 'beerEdit',
      component: BeerEdit
    },
  ]
})

export default router
