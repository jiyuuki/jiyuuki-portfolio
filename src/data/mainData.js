import { v4 as uuidv4 } from 'uuid'

export default {
  aboutMe: 'Highly skilled at Javascript ecosysteme and design systems with experience building products for may client, today i can help you create your product on the web',
  stack: [
    {
      id: uuidv4(),
      tag: 'Javascript'
    },
    {
      id: uuidv4(),
      tag: 'Vuejs'
    },
    {
      id: uuidv4(),
      tag: 'Pinia'
    },
    {
      id: uuidv4(),
      tag: 'Nuxtjs'
    },
    {
      id: uuidv4(),
      tag: 'Nodejs'
    },
    {
      id: uuidv4(),
      tag: 'Reactjs'
    }
  ],
  menuItems: [
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
