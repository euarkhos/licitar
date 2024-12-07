import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Licitacoes from '@/views/Licitacoes.vue'
import Documentos from '@/views/Documentos.vue'
import Analises from '@/views/Analises.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/licitacoes',
    name: 'Licitacoes',
    component: Licitacoes,
    meta: { requiresAuth: true }
  },
  {
    path: '/documentos',
    name: 'Documentos',
    component: Documentos,
    meta: { requiresAuth: true }
  },
  {
    path: '/analises',
    name: 'Analises',
    component: Analises,
    meta: { requiresAuth: true }
  }
]

export default routes
