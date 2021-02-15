import { api } from './AxiosService'
import { AppState } from '../AppState'
class BlogService {
  async getBlogs() {
    try {
      const res = await api.get('/blogs')
      AppState.blogs = res.data
    } catch (error) {
      // eslint-disable-next-line no-console
      // console.error(error)
    }
  }

  async createBlogs(blogData) {
    try {
      await api.post('/blogs', blogData)
    } catch (error) {
      // console.error(error)
    }
  }

  async getActiveBlog(blogId) {
    try {
      // console.log(blogId)
      const res = await api.get('/blogs/' + blogId)
      AppState.activeBlog = res.data
    } catch (error) {
      // console.error(error)
    }
  }

  async removeActiveBlog(blogId) {
    try {
      await api.delete('/blogs/' + blogId)
    } catch (error) {
      // console.error(error)
    }
  }
}
export const blogService = new BlogService()
