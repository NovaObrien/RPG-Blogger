import { AppState } from '../AppState'
import { api } from './AxiosService'

let url = '/blogs/'
let blogId = ''
class CommentService {
  async getComments() {
    blogId = AppState.activeBlogId
    url += blogId + '/comments'
    console.log(url)
    try {
      const resComment = await api.get(url += String(blogId) + '/comments')
      AppState.activeBlogComments = resComment.data
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
