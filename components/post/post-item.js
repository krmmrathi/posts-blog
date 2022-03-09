import classes from "./post-item.module.css";

import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useMutation } from 'react-query';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { PostsContext } from "../../pages/_app";
import { deletePost } from "../../lib/delete-post";

export default function PostItem({ details, user, props }) {
  const { darkMode, posts, setPosts } = useContext(PostsContext);
  const { handleEditNavigation, handleDetailsNavigation, handleDeletePost } = props;

  return (
    <Card className={darkMode? classes.darkContainer : classes.container}>
      <CardActionArea onClick={() => handleDetailsNavigation(details?.id)}>
        <CardContent>
          <Typography gutterBottom variant="body2" component="div" className={classes.title}>
            {"Post #" +details?.id+ " created by "+ user?.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" className={classes.title}>
            {details?.title}
          </Typography>
          <Typography variant="body2">
            {details?.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleEditNavigation(details?.id)}>
          Edit
        </Button>
        <Button size="small" color="primary" onClick={() => handleDeletePost(details?.id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
