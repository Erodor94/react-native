import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com'

class BlogService {
    // constructor () {
    //     this.axios = axios.create({
    //         baseUrl: 'https://jsonplaceholder.typicode.com'
    //     })
    // }
    getPosts = () => axios.get(`${baseURL}/posts`)

    getPostDetail = (id) => axios.get(`${baseURL}/posts/${id}`)

    getComments = (postId) => axios.get(`${baseURL}/posts/${postId}/comments`)
}

export const blogService = new BlogService()

export default BlogService