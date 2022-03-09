import axios from 'axios';

export async function loadPosts(skip = 0, limit = 10){
  const posts =  await axios.get("http://localhost:8080/posts", { params: { skip: skip, limit: limit } });
  return posts.data;
}