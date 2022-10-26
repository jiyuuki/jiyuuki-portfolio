import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'

import DefaultLayout from '@/views/layouts/DefaultLayout.vue'
import HomeView from '@/views/HomeView.vue'
import WorksView from '@/views/WorksView.vue'
import NotesView from '@/views/notes/NotesView.vue'
// import NoteDetailView from '@/views/notes/NoteDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'DefaultLayout',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'HomeView',
        component: HomeView
      },
      {
        path: 'works',
        name: 'WorksView',
        component: WorksView
      },
      {
        path: 'notes',
        name: 'NotesView',
        component: NotesView
      }
      // {
      //   path: '/notes/:id',
      //   name: 'NoteDetailView',
      //   component: NoteDetailView,
      //   props: true
      // }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundView',
    component: NotFoundView
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkErrorView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  next()
})

export default router
