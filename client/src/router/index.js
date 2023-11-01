import { createRouter, createWebHistory } from 'vue-router'
import {
  HomeView,
  JusticaEleitoralView,
  JusticaEstadualView,
  JusticaFederalView,
  JusticaMilitarView,
  JusticaTrabalhoView,
  TribunaisSuperioresView
} from '@/views/index.js'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/consultas/justica-eleitoral',
      name: 'Justiça Eleitoral',
      component: JusticaEleitoralView
    },
    {
      path: '/consultas/justica-estadual',
      name: 'Justiça Estadual',
      component: JusticaEstadualView
    },
    {
      path: '/consultas/justica-federal',
      name: 'Justiça Federal',
      component: JusticaFederalView
    },
    {
      path: '/consultas/justica-militar',
      name: 'Justiça Militar',
      component: JusticaMilitarView
    },
    {
      path: '/consultas/justica-trabalho',
      name: 'Justiça do Trabalho',
      component: JusticaTrabalhoView
    },
    {
      path: '/consultas/tribunais-superiores',
      name: 'Tribunais Superiores',
      component: TribunaisSuperioresView
    }
  ]
})

export default router
