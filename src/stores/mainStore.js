import { defineStore } from 'pinia'

const useMainStore = defineStore('mainStore', {
  state: () => {
    return {
      theme: localStorage.getItem('theme')
    }
  }
})

export default useMainStore
