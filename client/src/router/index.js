import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, DocumentsView, CourtView, TribunaisSuperioresView } from '@/views/index.js'
import {
  electoralJusticeCourts,
  stateJusticeCourts,
  militaryJusticeCourts,
  higherCourts
} from './complements.js'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'HomePage',
      component: HomeView
    },
    {
      path: '/documentos',
      name: 'Documents',
      component: DocumentsView
    },
    {
      path: '/consultas/justica-eleitoral',
      name: 'Justiça Eleitoral',
      component: CourtView,
      props: {
        courtName: 'Justiça Eleitoral',
        courtFlag: 'tre-',
        addonTest: 'ma',
        processTest: '06008817120226100000',
        courtsWithStates: electoralJusticeCourts,
        courtsWithRegionsDetails: null
      }
    },
    {
      path: '/consultas/justica-estadual',
      name: 'Justiça Estadual',
      component: CourtView,
      props: {
        courtName: 'Justiça Estadual',
        courtFlag: 'tj',
        addonTest: '',
        processTest: '',
        courtsWithStates: stateJusticeCourts,
        courtsWithRegionsDetails: null
      }
    },
    {
      path: '/consultas/justica-federal',
      name: 'Justiça Federal',
      component: CourtView,
      props: {
        courtName: 'Justiça Federal',
        courtFlag: 'trf',
        addonTest: '5',
        processTest: '08000789020184058200',
        courtsWithStates: [],
        courtsWithRegionsDetails: { quantity: 6, acronym: 'federal' }
      }
    },
    {
      path: '/consultas/justica-militar',
      name: 'Justiça Militar',
      component: CourtView,
      props: {
        courtName: 'Justiça Militar',
        courtFlag: 'tjm',
        addonTest: '',
        processTest: '',
        courtsWithStates: militaryJusticeCourts,
        courtsWithRegionsDetails: null
      }
    },
    {
      path: '/consultas/justica-trabalho',
      name: 'Justiça do Trabalho',
      component: CourtView,
      props: {
        courtName: 'Justiça do Trabalho',
        courtFlag: 'trt',
        addonTest: '15',
        processTest: '00113488220215150051',
        courtsWithStates: [],
        courtsWithRegionsDetails: { quantity: 24, acronym: 'trabalho' }
      }
    },
    {
      path: '/consultas/tribunais-superiores',
      name: 'Tribunais Superiores',
      component: CourtView,
      props: { courtName: 'Tribunais Superiores', courtsWithStates: higherCourts }
    }
  ]
})

export default router
