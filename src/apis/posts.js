import { postsInstance } from './index';

// 학습노트 데이터 조회 하는 API
const fetchPosts = ()=> {
  return postsInstance.get('/');
}

// 학습노트 데이터 조회 하는 API 특정 한개.
const fetchPost = (postId) => {
  return postsInstance.get(postId);
}

const createPost = (postData) => {
  return postsInstance.post('/', postData);
}

const editPost = (postId, postData) => {
  return postsInstance.put(postId, postData);
}

const deletePost = (postId) => {
  return postsInstance.delete(postId);
}

export { fetchPosts, createPost, deletePost, fetchPost, editPost};