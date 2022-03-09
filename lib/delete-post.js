import axios from 'axios';

export async function deletePost(postId){
  const result =  await axios.delete(`http://localhost:8080/posts/${postId}`);
  return result.data;
}