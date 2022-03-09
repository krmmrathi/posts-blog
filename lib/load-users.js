import axios from 'axios';

export async function loadUsers(){
  const users =  await axios.get("http://localhost:8080/users");
  return users.data;
}