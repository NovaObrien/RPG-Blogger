<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-6">
        <Blog v-for="blog in blogs" :blog-props="blog" :key="blog.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { blogService } from '../services/blogService.js'
import { AppState } from '../AppState'
import Blog from '../components/Blog'
export default {
  name: 'Home',
  components: { Blog },
  setup() {
    onMounted(() => {
      blogService.getBlogs()
    })
    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>
