import { useContext } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { PostsContext } from "../../pages/_app";
import { Text } from "../styled/Text.style";

export default function PostItem({ details, user, props }) {
  const { handleEditNavigation, handleDetailsNavigation, handleDeletePost } = props;

  return (
    <Card >
      <CardActionArea onClick={() => handleDetailsNavigation(details?.id)}>
        <CardContent>
          <Text gutterBottom variant="body2" component="div" underline={1}>
            {"Post #" +details?.id+ " created by "+ user?.name}
          </Text>
          <Text gutterBottom variant="h5" component="div" underline={1}>
            {details?.title}
          </Text>
          <Text variant="body2">
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
