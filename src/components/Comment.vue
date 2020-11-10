<template>
  <div class="Comment">
    <h5>{{ comment.body }}</h5>
    <!-- <h5>{{ comment.blog }}</h5> -->
    <h5>{{ comment.creatorEmail }}</h5>
    <button class="btn-dark">
      <i class="fas fa-skull-crossbones" @click="deleteActiveComment(comment)">
      </i>
    </button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { commentService } from '../services/CommentService'
export default {
  name: 'Comment',
  props: {
    commentProps: Object
  },
  setup(props) {
    return {
      comment: computed(() => props.commentProps),
      deleteActiveComment(id) {
        commentService.removeActiveComment(id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
