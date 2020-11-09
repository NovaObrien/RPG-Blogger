<template>
  <div class="activeBlog" v-if="blog.title">
    <h3>{{ blog.title }}</h3>
    <h3>{{ blog.body }}</h3>
    <h3>{{ blog.imgUrl }}</h3>
    <!-- <h3>{{ blog.published }}</h3> -->
    <h3>{{ blog.creatorEmail }}</h3>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { blogService } from '../services/BlogService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'

export default {
  name: 'ActiveBlog',
  setup() {
    const route = useRoute()
    onMounted(() => {
      blogService.getActiveBlog(route.params.blogId)
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
