import axios from 'axios';

export async function loadUser(id){
  const user =  await axios.get("http://localhost:8080/users/"+id);
  return user.data;
}