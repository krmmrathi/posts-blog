import Link from "next/link";
import { useContext } from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ToolButton } from '../styled/ToolButton.style';
import { RightSection } from '../styled/RightSection.style';
import { PostsContext } from "../../pages/_app";
import {StaticAppBar} from "../styled/StaticAppBar.style"

export default function Header() {
  const { darkMode, setDarkMode } = useContext(PostsContext);

  return (
      <StaticAppBar>
        <Toolbar variant="regular">
          <Typography variant="button" component="div">
            A Proof Of Concept Related To Posts
          </Typography>
          <RightSection>
            {/* <ToolButton onClick={ () => setDarkMode(!darkMode) }>Switch Theme</ToolButton> */}
            <Link href="/" passHref>
              <ToolButton>All Posts</ToolButton>
            </Link>
            <Link href="/new" passHref>
              <ToolButton>Create New Post</ToolButton>
            </Link>
          </RightSection>
        </Toolbar>
      </StaticAppBar>
  );
}
