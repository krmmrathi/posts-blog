import { useRouter } from "next/router";
import { useContext,  useState, useEffect } from "react";
import { useMutation, useQueryClient } from 'react-query';
import { deletePost, loadPosts } from "../lib";
import { PostsContext } from "./_app";
import PostListing from "../components/post/post-listing";

export default function PostList() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { users } = useContext(PostsContext);
  const [ posts, setPosts ] = useState([]);
  const [ totalPosts, setTotalPosts ] = useState(0);
  const [ hasMore, setHasMore ] = useState(true);
  const [ paginationProps, setPaginationProps] = useState({skip: 0, limit: 10});

  useEffect(() => {
    loadPosts(paginationProps.skip, paginationProps.limit).then((response) => {
    setPosts(posts.concat(response.posts))
    setTotalPosts(response.length)
    })
  },[])

  async function fetchMoreData(){
    if (posts.length >= totalPosts && posts.length!=0) {
      setHasMore(false);
      return;
    }

    const getNextPageData = await loadPosts(paginationProps.skip + paginationProps.limit, paginationProps.limit);
    setPaginationProps({skip: paginationProps.skip + paginationProps.limit, limit: paginationProps.limit});
    setPosts(posts.concat(getNextPageData.posts))
  };

  const handleEditNavigation = (id) => {
    router.push("/"+id);
  } 

  const handleDetailsNavigation = (id) => {
    router.push("/details/" + id);
  }

  const deletePostQuery = useMutation(
     (id) => deletePost(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
        setTimeout(router.reload, 1500);
     },
    }
  );

  const handleDeletePost = (id) => {
    deletePostQuery.mutate(id);
  }

  const infiniteScrollProps = {
    fetchMoreData: fetchMoreData,
    hasMore: hasMore
  }

  const postProps = {
    handleDetailsNavigation: handleDetailsNavigation,
    handleDeletePost: handleDeletePost,
    handleEditNavigation: handleEditNavigation,
  }

  return (
    <PostListing
    posts={posts}
    users={users}
    infiniteScrollProps={infiniteScrollProps}
    postProps={postProps}
    />
  )
}