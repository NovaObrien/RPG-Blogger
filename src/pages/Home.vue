<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-1" id="border">
        <CreateBlog class="mt-5" />
      </div>
      <div class="col-7 overflow-auto" id="blog">
        <Blog v-for="blog in blogs" :blog-props="blog" :key="blog.id" />
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
import { blogService } from '../services/BlogService.js'
import { AppState } from '../AppState'
import Blog from '../components/Blog'
import CreateBlog from '../components/CreateBlog'
export default {
  name: 'Home',
  components: { Blog, CreateBlog },
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

<style lang="scss" scoped>
#border{
  background-color: rgba(73, 32, 40, 0.705);
}
#blog{
  height: 80vh;
}
#footer{
  height: 12vh;
  background-color: rgb(0, 0, 0);
}
</style>
