import classes from "./details.module.css";

import { useContext } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { PostsContext } from "../../pages/_app";


export default function Details({ details, user, comments }){
  const { darkMode } = useContext(PostsContext);

  return(
      <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={darkMode ? classes.darkContainer : classes.container}>
      <Grid item className={classes.child}>
        <Typography gutterBottom variant="h4">
        {"Post #"+details?.id}
        </Typography>
      </Grid>
      <Box className={classes.borderBox}>
        <Grid item className={classes.child}>
            <Typography gutterBottom variant="button">
            {"created by " +user?.name}
            </Typography>
        </Grid>
        <Grid item className={classes.child}>
            <Typography gutterBottom variant="h4" className={classes.title}>
            {details?.title}
            </Typography>
        </Grid>   
        <Grid item className={classes.child}>
            <Typography gutterBottom variant="body1">
            {details?.body}
            </Typography>
        </Grid>
      </Box>
      <Box className={classes.commentBox}>
        <Grid item className={classes.comment}>
              <Typography gutterBottom variant="h6">
              {comments?.length + " comment(s)"}
              </Typography>
        </Grid>
      {comments?.map(function(comment, index){
      return (
      <Box className={classes.gapBox} key={index}>
        <Grid item className={classes.comment}>
          <Typography gutterBottom variant="overline">
          {" by " +comment?.email}
          </Typography>
        </Grid>
        <Grid item className={classes.comment}>
            <Typography gutterBottom variant="h5" className={classes.title}>
            {comment?.name}
            </Typography>
        </Grid>   
        <Grid item className={classes.comment}>
            <Typography gutterBottom variant="body2">
            {comment?.body}
            </Typography>
        </Grid>
      </Box>
      );})}
       </Box>
    </Grid>
  )
}