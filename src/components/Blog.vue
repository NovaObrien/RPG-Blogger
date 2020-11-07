<template>
  <div class="Blog">
    <h3>{{ blog.title }}</h3>
    <h5>User: {{ blog.creatorEmail }}</h5>
  </div>
</template>

<script>
import { computed } from 'vue'
// import { AppState } from '../AppState'
export default {
  name: 'Blog',
  props: {
    blogProps: Object
  },
  setup(props) {
    return {
      blog: computed(() => props.blogProps)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
