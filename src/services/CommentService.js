import { AppState } from '../AppState'
import { api } from './AxiosService'

class CommentService {
  async getComments(blogId) {
    console.log(blogId)
    try {
      const res = await api.get('/blog/' + blogId + '/comments')
      AppState.activeBlogComments = res.data.map(c => new Comment(c))
    } catch (error) {
      console.error(error)
    }
  }
  // async createComment(commentData) {
  //   try {
  //     await api.post('', commentData)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}
export const commentService = new CommentService()
