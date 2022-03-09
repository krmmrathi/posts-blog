import {isEqual} from 'lodash'; 
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from 'react-query';
import  Form from "../components/form/form";
import { insertPost, loadPost, updatePost } from "../lib";

export default function Edit() {
  const form = useForm();
  const queryClient = useQueryClient();
  const router = useRouter();
  const [ postData, setPostData ] = useState(defaultFormValue);
  const formFields = [{label: "Title", name: "title"}, {label: "Body", name: "body"}];
  const defaultFormValue = {title: "", body: ""};

  const postId = router.query.postId;
  const isNew = postId == "new";

  const updatePostQuery = useMutation(
    () => updatePost(postId, form.getValues()),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
        router.push("/")
      }
    }
  );

  const insertPostQuery = useMutation(
    () => insertPost(form.getValues()),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
        setTimeout(() => {   router.push("/")}, 1000);
      }
    }
  );

  const loadPostQuery = useQuery(
    ['posts', postId], () => loadPost(postId),
    {
      enabled: !isNew,
      retry: false,
      onSuccess: (post) => {
        setPostData(post);
      }
    }
  );

  const handleSubmit = () => {
    if(isNew)
    insertPostQuery.mutate();
    else
    updatePostQuery.mutate();
  }

  useEffect(() => {
    setPostData(defaultFormValue);
  }, [isNew])

  if(loadPostQuery.isLoading || (!isNew && isEqual(postData, defaultFormValue)) )
  return(
    <></>
  )

  return (
    <Form
    form={form}
    isNew={isNew}
    data={postData}
    formFields={formFields}
    onSubmit={handleSubmit}
    />
  )
}