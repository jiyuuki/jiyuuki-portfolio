<template>
  <div class="pb-10">
    <h1 class="text-2xl font-medium text-secondaryContent">
      Qui qui exercitation fugiat dolore nisi enim voluptate
    </h1>
    <p class="text-colorGray text-base pt-5">
      Published on Marsh 2th 2022
    </p>
  </div>
  <div class="mx-auto">
    <p class="py-6 text-lg font-medium">
      Qui qui exercitation fugiat dolore nisi enim voluptate sint elit qui sit. Excepteur aliquip elit laboris culpa
      voluptate velit Lorem aute laborum ad voluptate. Officia occaecat sunt qui commodo proident mollit ad enim enim
      esse eu. Laboris officia ut anim amet tempor minim deserunt aliqua.Id deserunt consequat veniam commodo tempor
      consectetur velit reprehenderit Lorem.
    </p>
    <p class="py-6 text-lg font-medium">
      Qui qui exercitation fugiat dolore nisi enim voluptate sint elit qui sit. Excepteur aliquip elit laboris culpa
      voluptate velit Lorem aute laborum ad voluptate. Officia occaecat sunt qui commodo proident mollit ad enim enim
      esse eu. Laboris officia ut anim amet tempor minim deserunt aliqua.Id deserunt consequat veniam commodo tempor
      consectetur velit reprehenderit Lorem.
    </p>
    <p class="py-6 text-lg font-medium">
      Qui qui exercitation fugiat dolore nisi enim voluptate sint elit qui sit. Excepteur aliquip elit laboris culpa
      voluptate velit Lorem aute laborum ad voluptate. Officia occaecat sunt qui commodo proident mollit ad enim enim
      esse eu. Laboris officia ut anim amet tempor minim deserunt aliqua.Id deserunt consequat veniam commodo tempor
      consectetur velit reprehenderit Lorem.
    </p>
    <p class="py-6 text-lg font-medium">
      Qui qui exercitation fugiat dolore nisi enim voluptate sint elit qui sit. Excepteur aliquip elit laboris culpa
      voluptate velit Lorem aute laborum ad voluptate. Officia occaecat sunt qui commodo proident mollit ad enim enim
      esse eu. Laboris officia ut anim amet tempor minim deserunt aliqua.Id deserunt consequat veniam commodo tempor
      consectetur velit reprehenderit Lorem.
    </p>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'NoteDetailView',

  props: {
    id: {
      type: String,
      require: true,
      default: null
    }
  },

  setup (props) {
    onMounted(() => {
      console.log({ id: props.id })
    })
  }
}
</script>

<style scoped></style>
