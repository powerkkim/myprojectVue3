import { createRouter, createWebHistory } from 'vue-router';
import { userStore } from '@/stores/userStore';

const routes = [
  { path: '/', redirect:'/login' },
  { name: 'login', path: '/login', component: () => import('@/views/LoginPage.vue') },
  { path: '/signup', component: () => import('@/views/SignupPage.vue') },
  { path: '/main', component: () => import('@/views/MainPage.vue'), meta: { requiresAuth: true }, },
  { path: '/add', component: () => import('@/views/PostAddPage.vue'), meta: { requiresAuth: true }, },
  { path: '/post/:id', component: () => import('@/views/PostEditPage.vue'), meta: { requiresAuth: true }, },
  { path: '/:pathMatch(.*)*', component: () => import('@/views/NotFoundPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  // explicitly return false to cancel the navigation
  if (to.meta.requiresAuth && !userStore().isLogin()) {
    next({ name: 'login' })
  } else {
    next()
  }
})


export default router
