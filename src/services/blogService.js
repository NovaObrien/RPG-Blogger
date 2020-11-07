import { api } from './AxiosService'
import { AppState } from '../AppState'
class BlogService {
  async getBlogs() {
    try {
      const res = await api.get('/blogs')
      AppState.blogs = res.data
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}
export const blogService = new BlogService()
