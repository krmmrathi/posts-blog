import { Outergrid } from "../styled/Outergrid.style";
import { Text } from "../styled/Text.style";
import { Griditem } from "../styled/Griditem.style";
import { Container } from "../styled/Container.style";


export default function Details({ details, user, comments }){

  return(
      <Outergrid>
      <Griditem>
      <Container mtlarge>
        <Text gutterBottom variant="h4">
        {"Post #"+details?.id}
        </Text>
      </Container>
      </Griditem>
      <Container medium border>
        <Griditem>
            <Text gutterBottom variant="button" underline={1}>
            {"created by " +user?.name}
            </Text>
        </Griditem>
        <Griditem>
            <Text gutterBottom variant="h4" underline={1}>
            {details?.title}
            </Text>
        </Griditem>   
        <Griditem>
            <Text gutterBottom variant="body1">
            {details?.body}
            </Text>
        </Griditem>
      </Container>
      <Container border mtlarge>
        <Container medium>
          <Griditem>
                <Text gutterBottom variant="h6">
                {comments?.length + " comment(s)"}
                </Text>
          </Griditem>
          </Container>
      {comments?.map(function(comment, index){
      return (
      <Container medium key={index}>
        <Griditem>
          <Text gutterBottom variant="overline" underline={1}>
          {" by " +comment?.email}
          </Text>
        </Griditem>
        <Griditem>
            <Text gutterBottom variant="h5">
            {comment?.name}
            </Text>
        </Griditem>   
        <Griditem>
            <Text gutterBottom variant="body2">
            {comment?.body}
            </Text>
        </Griditem>
      </Container>
      );})}
       </Container>
    </Outergrid>
  )
}