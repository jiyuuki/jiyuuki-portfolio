import { v4 as uuidv4 } from 'uuid'

export default {
  menuItems: [
    {
      id: uuidv4(),
      name: 'HomeView',
      title: 'Jiyuuki'
    },
    {
      id: uuidv4(),
      name: 'WorksView',
      title: 'Works'
    },
    {
      id: uuidv4(),
      name: 'NotesView',
      title: 'Notes'
    }
  ]
}
