import axios from 'axios';

export async function updatePost(postId, data){
  const result =  await axios.put(`http://localhost:8080/posts/${postId}`, data);
  return result.data;
}