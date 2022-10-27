import { v4 as uuidv4 } from 'uuid'

export default {
  pageTitle: 'My learning journey in notes',
  quotes: 'Only the mediocre are always at their best - Jean Giraudoux',
  notes: [
    {
      id: uuidv4(),
      title: 'Vue2 vs Vue3 input forms',
      description: '',
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
      joke: 'Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them'
    },
    {
      id: uuidv4(),
      title: 'Emit an event Composition Api',
      description: '',
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
      joke: 'What did the spaghetti say to the other spaghetti? - Pasta la vista, baby!'
    },
    {
      id: uuidv4(),
      title: 'Recursive components',
      description: '',
      content:
`<template>
  <div>
    <span>{{ branch.label }}</span>
    <span
      v-show="hasChildren"
    >
      🌠
    </span>
    // add toggle function to show or hide children
    // try to use a flat array
    // add and delete children
  </div>
  <div 
    v-if="hasChildren"
    :style="{ marginLeft: addSpacing px}"
  >
    <Tree
      v-for="child in branch.children"
      :key="child.id"
      :branch="child"
      :spacing="addSpacing"
    />
  </div>
</template>
<script>
import { computed, onMounted, getCurrentInstance } from 'vue'
export default {
  name: 'Tree',
  props: {
    branch: {
      type: Object,
      required: true
    },
    spacing: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const hasChildren = computed(() => props.branch?.children?.length > 0)
    const addSpacing = computed(() => props.spacing + 10 )
    
    return {
      hasChildren,
      addSpacing
    }
  }
}
</script>
      `,
      joke: 'What kind of magic do cows believe in? - MOODOO'
    },
    {
      id: uuidv4(),
      title: 'Re-render component',
      description: '',
      content:
`<template>
  <render-component :key="count" />
  <span @click="renderComponent">Click to reload render-component</span>
</template>
      
<script>
import { ref } from 'vue'
export default {
name: 're-render',

setup() {
    const count = ref(0)
  
  const renderComponent = () => {
    count.value++
  }
  return {
    count,
    renderComponent
  }
}
}
</script>`,
      joke: 'People are making apocalypse jokes like there’s no tomorrow'
    },
    {
      id: uuidv4(),
      title: 'Trigger',
      description: '',
      content:
`<template>
<el-dropdown trigger="click" ref="elDropDownRef">
  <span class="el-dropdown-link">
    Dropdown list
  </span>
  <template #dropdown>
    <el-dropdown-menu @mouseleave="triggerHandle">
      <el-dropdown-item>Action 1</el-dropdown-item>
      <el-dropdown-item>Action 2</el-dropdown-item>
      <el-dropdown-item>Action 3</el-dropdown-item>
      <el-dropdown-item disabled>Action 4</el-dropdown-item>
      <el-dropdown-item divided>Action 5</el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>
</template>

<script>
import { ref } from 'vue'
export default {
name: 'trigger',
setup() {
  const elDropDownRef = ref()
  const triggerHandle = () => {
    elDropDownRef.value.popperRef.hide()
  }
  return {
    elDropDownRef,
    triggerHandle,
  }
}
}
</script>`,
      joke: 'Where do cats write notes? Scratch Paper!'
    }
  ]
}
