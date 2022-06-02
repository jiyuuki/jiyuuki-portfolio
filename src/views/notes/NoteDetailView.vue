<template>
  <h1>Note detail : {{ id }}</h1>
</template>

<script>
export default {
  name: 'NoteDetailView',

  props: {
    id: {
      type: String,
      require: true,
      default: null
    }
  },

  setup () {
    //
  }
}
</script>

<style scoped></style>
