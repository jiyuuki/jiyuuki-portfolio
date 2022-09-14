import { v4 as uuidv4 } from 'uuid'

export default {
  pageTitle: 'My learning journey in notes',
  quotes: 'Only the mediocre are always at their best - Jean Giraudoux',
  notes: [
    {
      id: uuidv4(),
      title: 'Nostrum quos voluptas perferendis',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos voluptas perferendis, alias enim id quas omnis aut dolorem, doloremque cumque? Eum quae cupiditate eius sit...',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos voluptas perferendis, alias enim id quas omnis aut dolorem, doloremque cumque? Eum quae cupiditate eius sit, ullam cum fugit beatae?',
      published: 'Marsh 2th 2022',
      joke: 'Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.'
    },
    {
      id: uuidv4(),
      title: 'Nostrum quos voluptas perferendis',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos voluptas perferendis, alias enim id quas omnis aut dolorem, doloremque cumque? Eum quae cupiditate eius sit...',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos voluptas perferendis, alias enim id quas omnis aut dolorem, doloremque cumque? Eum quae cupiditate eius sit, ullam cum fugit beatae?',
      published: 'Marsh 2th 2022',
      joke: ''
    }
  ]
}
