import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import TodoList from '@/views/TodoList.vue'
import TodoView from '@/views/TodoView.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/todolist', component: TodoList },
  { path: '/todoview', component: TodoView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
