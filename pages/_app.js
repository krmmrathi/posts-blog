import "../styles/global.css";

import { createContext, useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "../components/layout/layout";
import { loadUsers } from "../lib/load-users";

export const PostsContext = createContext(null);

const queryClient = new QueryClient()


function MyApp({ Component, pageProps }) {
  const [users, setUsers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  

  useEffect(() => {
    if(users.length == 0)
      loadUsers().then((data) => {
        setUsers(data);
      })
  },[]);


  return (
    <PostsContext.Provider value={{ users, darkMode,setUsers, setDarkMode }}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
     </PostsContext.Provider>
  )
}

export default MyApp
