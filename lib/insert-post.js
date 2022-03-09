import axios from 'axios';

export async function insertPost(data){
  const result =  await axios.post(`http://localhost:8080/posts`, {userId: 1, ...data});
  return result.data;
}