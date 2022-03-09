import axios from 'axios';

export async function loadComments(postId){
  const comments =  await axios.get(`http://localhost:8080/posts/${postId}/comments`);
  return comments.data;
}