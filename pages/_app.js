import '../styles/globals.css'

import { createContext, useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "../components/layout/layout";
import { loadPosts } from "../lib/load-posts";
import { loadUsers } from "../lib/load-users";

export const PostsContext = createContext(null);

const queryClient = new QueryClient()


function MyApp({ Component, pageProps }) {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  

  useEffect(() => {
    if(posts.length == 0)
      loadPosts().then((data) => {
        setPosts(data);
      })
    if(users.length == 0)
      loadUsers().then((data) => {
        setUsers(data);
      })
  },[]);


  return (
    <PostsContext.Provider value={{ posts, users, darkMode, setPosts, setUsers, setDarkMode }}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
     </PostsContext.Provider>
  )
}

export default MyApp
