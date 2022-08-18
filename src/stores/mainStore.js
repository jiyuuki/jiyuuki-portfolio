import mainData from '@/data/mainData'
import { defineStore } from 'pinia'

const useMainStore = defineStore('mainStore', {
  state: () => {
    return {
      theme: localStorage.getItem('theme'),
      aboutMe: mainData.aboutMe,
      stack: mainData.stack
    }
  }
})

export default useMainStore
