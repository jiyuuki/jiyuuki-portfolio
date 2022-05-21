import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DefaultLayout from '../views/layouts/DefaultLayout.vue'
import HomeView from '../views/HomeView.vue'
import WorksView from '../views/WorksView.vue'
import NotesView from '../views/notes/NotesView.vue'
import NoteDetailView from '../views/notes/NoteDetailView.vue'

const routes: Array<RouteRecordRaw> = [
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
        component: NotesView,
        children: [
          {
            path: 'note/:id', // BUG: can't read page content
            name: 'NoteDetailView',
            component: NoteDetailView
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
