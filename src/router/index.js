import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import Home from '../pages/Home.vue'
// @ts-ignore
import Profile from '../pages/Profile.vue'
// @ts-ignore
import ActiveBlog from '../pages/ActiveBlog.vue'
import TestPage from '../pages/TestPage.vue'
import { Auth0Provider } from '@bcwdev/auth0provider-client'

const routes = [
  {
    path: '/',
    name: 'Test',
    component: TestPage
  },
  {
    path: '/blog',
    name: 'Home',
    component: Home
    // beforeEnter: Auth0Provider.authGuard
  },
  {
    path: '/blog/:blogId',
    name: 'ActiveBlog',
    component: ActiveBlog
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: Auth0Provider.authGuard
  }]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
