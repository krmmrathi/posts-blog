import axios from 'axios';

export async function loadPost(id){
  const post =  await axios.get("http://localhost:8080/posts/"+id);
  return post.data;
}