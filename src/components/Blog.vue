<template>
  <div class="Blog p-3">
    <h3 @click="setActiveBlog">{{ blog.title }}</h3>
    <h5>User: {{ blog.creatorEmail }}</h5>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { blogService } from '../services/BlogService'

export default {
  name: 'Blog',
  props: {
    blogProps: Object
  },
  setup(props) {
    const router = useRouter()
    return {
      blog: computed(() => props.blogProps),
      setActiveBlog() {
        router.push({ name: 'ActiveBlog', params: { blogId: props.blogProps._id } })
        blogService.getActiveBlog(props.blogProps)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
