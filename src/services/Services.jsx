import { blogApi } from '../api/blog';
import { commentApi } from '../api/comment';

async function getAllBlog() {
   try {
      const res = await blogApi.getPageAll();
      const blogs = await res.data;
      return blogs
   } catch (err) {}
}

async function getPagination(currentPage) {
   try {
      const res = await blogApi.getPagination(currentPage);
      const data = await res.data;
      return data;
   } catch (err) {}
}

async function getOne(slug) {
   try {
      const res = await blogApi.getOne(slug);
      const blog = await res.data.blog;
      return blog;
   } catch (err) {}
}

async function createComment(blogId, params) {
   try {
      const res = await commentApi.create(blogId, params);
      const msg = await res.data.message;
      return {msg, status: 200};
   } catch (err) {
      return {msg: err.response.data.message, status: 400};
   }
}

export {
   getAllBlog,
   getPagination,
   createComment,
   getOne
}