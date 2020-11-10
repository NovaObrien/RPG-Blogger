<template>
  <div class="Comment">
    <h5>{{ comment.body }}</h5>
    <h5>{{ comment.blog }}</h5>
    <h5>{{ comment.creatorEmail }}</h5>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'Comment',
  props: {
    commentProps: Object
  },
  setup(props) {
    return {
      comment: computed(() => props.commentProps)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
