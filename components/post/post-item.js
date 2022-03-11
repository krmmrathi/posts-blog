import { useContext } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { PostsContext } from "../../pages/_app";
import { Text } from "../styled/Text.style";

export default function PostItem({ details, user, props }) {
  const { darkMode } = useContext(PostsContext);
  const { handleEditNavigation, handleDetailsNavigation, handleDeletePost } = props;

  return (
    <Card style={{backgroundColor: darkMode ? "black" : "white" }}>
      <CardActionArea onClick={() => handleDetailsNavigation(details?.id)}>
        <CardContent>
          <Text gutterBottom variant="body2" component="div" underline={1} dark={darkMode ? 1 : 0}>
            {"Post #" +details?.id+ " created by "+ user?.name}
          </Text>
          <Text gutterBottom variant="h5" component="div" underline={1} dark={darkMode ? 1 : 0}>
            {details?.title}
          </Text>
          <Text variant="body2" dark={darkMode ? 1 : 0}>
            {details?.body}
          </Text>
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
