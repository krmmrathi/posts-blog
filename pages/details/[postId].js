import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useQuery } from 'react-query';

import  Details from "../../components/details/details";
import { loadComments } from "../../lib/load-comments";
import { loadPost } from "../../lib/load-post";
import { isEmpty } from "../../utils/common-function";


import { PostsContext } from "../_app";

export default function PostDetails() {
  const router = useRouter();
  const { users } = useContext(PostsContext);
  const [ details, setDetails ] = useState({});
  const [ comments, setComments ] = useState([]);

  const postId = router.query.postId;

  const detailsQuery = useQuery(
    ['posts', postId], () => loadPost(postId),
    {
      enabled: postId  !== undefined,
      onSuccess: (data) => setDetails(data)
    }
  );

  const commentsQuery = useQuery(
    ['comments', postId], () => loadComments(postId),
    {
      enabled: postId  !== undefined,
      onSuccess: (data) => setComments(data)
    }
  );

  if(detailsQuery.isLoading || commentsQuery.isLoading )
  return(
    <></>
  )

  return (
    <Details details={details} user={users?.find(user => user?.id == details?.userId)} comments={comments} />
  )
}