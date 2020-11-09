<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-1" id="border">
        <CreateComment class="mt-5" />
      </div>
      <div class="col-7 overflow-auto" id="post">
        <div
          class="activeBlog d-flex flex-column align-items-center bg-light"
          v-if="blog.title"
        >
          <h2>{{ blog.title }}</h2>
          <h4>{{ blog.body }}</h4>
          <!-- <h6>{{ blog.imgUrl }}</h6> -->
          <!-- <h3>{{ blog.published }}</h3> -->
          <h6>By: {{ blog.creatorEmail }}</h6>
        </div>
        <div>
          <Comment
            v-for="comment in activeBlogComments"
            :comment-props="comment"
            :key="comment.id"
          />
        </div>
      </div>
      <div class="col" id="border"></div>
    </div>
    <div class="row" id="footer">
      <i class="fas fa-dice-d20 fa-5x m-3"></i>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { blogService } from '../services/BlogService'
import { commentService } from '../services/CommentService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import Comment from '../components/Comment'
import CreateComment from '../components/CreateComment'

export default {
  name: 'ActiveBlog',
  components: { Comment, CreateComment },
  setup() {
    const route = useRoute()
    onMounted(() => {
      blogService.getActiveBlog(route.params.blogId)
      commentService.getComments()
    })
    return {
      blog: computed(() => AppState.activeBlog)
      // removeCar() {
      //   blogService.removeCar(route.params.blogId)
      // }
    }
  }
}
</script>
<style lang="scss" scoped>
#border{
  background-color: rgba(73, 32, 40, 0.705);
}
#post{
  height: 80vh;
}
#footer{
  height: 12vh;
  background-color: rgb(0, 0, 0);
}
</style>
<style scoped>
</style>
