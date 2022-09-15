import { v4 as uuidv4 } from 'uuid'

export default {
  aboutMe: 'Sills tempor qui labore minim velit exercitation incididunt occaecat dolore. Veniam tempor do deserunt voluptate aliquip sit. Commodo ipsum nisi deserunt adipisicing sit mollit dolor eu irure sunt est officia labore',
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
      title: 'Open source'
    }
  ]
}
