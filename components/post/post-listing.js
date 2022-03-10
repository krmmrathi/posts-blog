import Typography from '@mui/material/Typography';
import { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import  PostItem from "./post-item";
import { PostsContext } from "../../pages/_app";
import { Griditem } from "../styled/Griditem.style";
import { Outergrid } from "../styled/Outergrid.style";
import { Text } from "../styled/Text.style";
import { Container } from "../styled/Container.style";

export default function PostListing ({posts = [], users = [], infiniteScrollProps, postProps}){
    const { darkMode } = useContext(PostsContext);

    return (
        <Outergrid>
          <Container mtlarge={1}>
            <Griditem>
              <Text variant="h4">
              {"All Posts"}
              </Text>
            </Griditem>
          </Container>
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
            <Griditem key={ index }>
              <Container border={1} mtlarge={1}>
                <PostItem
                  details={post}
                  user={users?.find(user => user?.id == post?.userId)}
                  props={postProps}
                />
              </Container>
            </Griditem>
            );})
          }
            </InfiniteScroll>        
        </Outergrid>
    )
} 