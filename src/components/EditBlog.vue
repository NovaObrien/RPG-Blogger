<template>
  <div class="edit-blog">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-dark"
      data-toggle="modal"
      data-target="#exampleModalLong"
    >
      Edit
      <i class="fas fa-scroll"></i>
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalLong"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form class="form-group" @submit.prevent="editPost">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                edit a Post...
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
              <input
                type="text"
                class="form-control"
                name=""
                id=""
                aria-describedby="titleId"
                placeholder="Title..."
                v-model="state.newBlog.title"
              />
              <textarea
                class="form-control rounded-0 mt-3"
                rows="15"
                name=""
                id=""
                aria-describedby="Body"
                placeholder="Content goes here..."
                v-model="state.newBlog.body"
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
              <button type="submit" class="btn btn-primary">Edit Post</button>
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
      editBlog() {
        commentService.createComment(state.newComment)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
