import routes from './routes'
import {createRouter, createWebHistory} from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
