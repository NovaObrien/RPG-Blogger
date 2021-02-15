<template>
  <div class="Comment row py-2">
    <div class="col-7 bg-gray">
      <h5 class=" p-2 my-auto">
        {{ comment.body }}
      </h5>
      <div class="my-auto d-flex justify-content-end bg-gray rounded-top pr-2">
        <h5>
          {{ comment.creatorEmail }}
        </h5>
      </div>
    </div>
    <!-- <h5>{{ comment.blog }}</h5> -->
    <div class="col-1 my-auto">
      <button class="btn-dark" v-if="comment.creator.id == profile.id">
        <i class="fas fa-skull-crossbones" @click="deleteActiveComment(comment)">
        </i>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { commentService } from '../services/CommentService'
import { AppState } from '../AppState'
export default {
  name: 'Comment',
  props: {
    commentProps: Object
  },
  setup(props) {
    return {
      comment: computed(() => props.commentProps),
      profile: computed(() => AppState.profile),
      deleteActiveComment(id) {
        commentService.removeActiveComment(id)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.bg-gray{
  background-color: rgba(128, 128, 128, 0.301);
}
</style>
