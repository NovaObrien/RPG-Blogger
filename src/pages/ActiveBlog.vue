<template>
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
</template>

<script>
import { computed, onMounted } from 'vue'
import { blogService } from '../services/BlogService'
import { commentService } from '../services/CommentService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import Comment from '../components/Comment'

export default {
  name: 'ActiveBlog',
  components: { Comment },
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

<style scoped>
</style>
