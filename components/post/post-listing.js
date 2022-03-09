import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import  PostItem from "./post-item";
import { PostsContext } from "../../pages/_app";

export default function PostListing ({posts = [], users = [], infiniteScrollProps, postProps}){
    const { darkMode } = useContext(PostsContext);

    return (
        <Grid
          container
          style={{padding: 30, backgroundColor: !darkMode ? "white" : "black"}}
          direction="column"
          justifyContent="center"
          alignItems="center"
          >
          <Grid item>
            <Typography variant="h4" color={darkMode ? "white" : "black"}>
            {"All Posts"}
            </Typography>
          </Grid>
          <InfiniteScroll
            dataLength={posts.length}
            next={infiniteScrollProps.fetchMoreData}
            hasMore={infiniteScrollProps.hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
            <p style={{ textAlign: "center" }}>
              <b>--</b>
            </p>
          }
          >
          {posts?.map(function(post, index){
            return (
            <Grid item key={ index }>
              <PostItem
                details={post}
                user={users?.find(user => user?.id == post?.userId)}
                props={postProps}
              />
            </Grid>
            );})
          }
            </InfiniteScroll>        
        </Grid>
    )
} 