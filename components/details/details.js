import { useContext } from "react";
import { PostsContext } from "../../pages/_app";
import { Outergrid } from "../styled/Outergrid.style";
import { Text } from "../styled/Text.style";
import { Griditem } from "../styled/Griditem.style";
import { Container } from "../styled/Container.style";


export default function Details({ details, user, comments }){
  const { darkMode } = useContext(PostsContext);

  return(
      <Outergrid dark={darkMode ? 1 : 0}>
      <Griditem>
      <Container mtlarge>
        <Text gutterBottom variant="h4" dark={darkMode ? 1 : 0}>
        {"Post #"+details?.id}
        </Text>
      </Container>
      </Griditem>
      <Container medium border>
        <Griditem>
            <Text gutterBottom variant="button" underline={1} dark={darkMode ? 1 : 0}>
            {"created by " +user?.name}
            </Text>
        </Griditem>
        <Griditem>
            <Text gutterBottom variant="h4" underline={1} dark={darkMode ? 1 : 0}>
            {details?.title}
            </Text>
        </Griditem>   
        <Griditem>
            <Text gutterBottom variant="body1" dark={darkMode ? 1 : 0}>
            {details?.body}
            </Text>
        </Griditem>
      </Container>
      <Container border mtlarge>
        <Container medium>
          <Griditem>
                <Text gutterBottom variant="h6" dark={darkMode ? 1 : 0}>
                {comments?.length + " comment(s)"}
                </Text>
          </Griditem>
          </Container>
      {comments?.map(function(comment, index){
      return (
      <Container medium key={index}>
        <Griditem>
          <Text gutterBottom variant="overline" underline={1} dark={darkMode ? 1 : 0}>
          {" by " +comment?.email}
          </Text>
        </Griditem>
        <Griditem>
            <Text gutterBottom variant="h5" dark={darkMode ? 1 : 0}>
            {comment?.name}
            </Text>
        </Griditem>   
        <Griditem>
            <Text gutterBottom variant="body2" dark={darkMode ? 1 : 0}>
            {comment?.body}
            </Text>
        </Griditem>
      </Container>
      );})}
       </Container>
    </Outergrid>
  )
}