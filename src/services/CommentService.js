import { AppState } from '../AppState'
import { api } from './AxiosService'

class CommentService {
  async getComments(blogId) {
    try {
      const res = await api.get('/blogs/' + blogId + '/comments')
      AppState.activeBlogComments = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async createComment(commentData) {
    try {
      await api.post('/comments', commentData)
      const blogId = commentData.blog
      this.getComments(blogId)
    } catch (error) {
      console.error(error)
    }
  }

  async removeActiveComment(id) {
    try {
      const blogId = id.blog
      const commentId = id._id
      await api.delete('/comments/' + commentId)
      this.getComments(blogId)
    } catch (error) {
      console.error(error)
    }
  }
}
export const commentService = new CommentService()
