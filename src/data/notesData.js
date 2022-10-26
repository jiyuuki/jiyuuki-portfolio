import { v4 as uuidv4 } from 'uuid'

export default {
  pageTitle: 'My learning journey in notes',
  quotes: 'Only the mediocre are always at their best - Jean Giraudoux',
  notes: [
    {
      id: uuidv4(),
      title: 'Vue2 vs Vue3 input forms',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      content:
  `<template>
    <div>
      // vue2
      <input
        type="text"
        :value="value"
        @input="$emit(
          'input',
          $event.target.value
        )"
      >
      // vue3
      <input
        type="text"
        :value="modelValue"
        @input="$emit(
          'update:modelValue',
          $event.target.value
        )"
      >
    </div>
    // Call of BaseInput in vue3
    <BaseInput
      v-model:modelValue="myInput"
    />
  </template>
  <script>
  export default {
    name: 'VueModel',
    props: {
      value: {
        type: [String, Number],
        default: null
      },
      modelValue: {
        type: [String, Number],
        default: null
      }
    }
  }
  </script>`,
      joke: 'Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.'
    },
    {
      id: uuidv4(),
      title: 'Emit',
      description: 'Emit an event Composition Api',
      content: `  // child component
    <template>
      <input
      @keyup="getData"
      >
    </template>
    <script>
    export default {
      name: 'child',
      emits: ['search'],
      setup(props, { emit }) {
        const getData = () => {
          // do you...
          emit('search', 'bla bla bla')
        }
        return {
          getData,
        }
      }
    }
    </script>

    // parent component
    <template>
      <child @search="getBlaBla" />
    <template/>

    <script>
    import Child from '...'

    export default {
      name: 'parent',
      components: {
        Child,
      },
      
      setup() {
        const getBlaBla = (value) => {
          console.log(value) // output : Bla Bla Bla
        }
        
        return {
          getBlaBla,
        }
      }
    }
    <script/>`,
      joke: ''
    }
  ]
}
