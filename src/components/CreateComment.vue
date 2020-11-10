<template>
  <div class="create-comment">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-dark"
      data-toggle="modal"
      data-target="#createModal"
    >
      <i class="fas fa-scroll"></i>
      Reply
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="createModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form class="form-group" @submit.prevent="createComment(blog._id)">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Create a Comment...
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <!-- <label for=""></label> -->
              <textarea
                class="form-control rounded-0 mt-3"
                rows="15"
                name=""
                id=""
                aria-describedby="Body"
                placeholder="Content goes here..."
                v-model="state.newComment.body"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">Comment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
// import Blog from '../components/Blog'
import { AppState } from '../AppState'
import { commentService } from '../services/CommentService'
export default {
  name: 'CreateBlog',
  setup() {
    const state = reactive({
      newComment: {}
    })
    return {
      state,
      blog: computed(() => AppState.activeBlog),
      comments: computed(() => AppState.activeBlogComments),
      createComment(blogId) {
        state.newComment.blog = blogId
        commentService.createComment(state.newComment, blogId)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
