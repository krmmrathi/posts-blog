import { useContext } from "react";
import Link from "next/link";
import Toolbar from '@mui/material/Toolbar';
import { PostsContext } from "../../pages/_app";
import { ToolButton } from '../styled/ToolButton.style';
import { RightSection } from '../styled/RightSection.style';
import {StaticAppBar} from "../styled/StaticAppBar.style"
import { Text } from '../styled/Text.style';

export default function Header() {
  const { darkMode, setDarkMode } = useContext(PostsContext);

  return (
      <StaticAppBar dark={darkMode ? 1 : 0}>
        <Toolbar variant="regular">
          <Text variant="button" component="div" dark={darkMode ? 1 : 0}>
            A Proof Of Concept Related To Posts
          </Text>
          <RightSection>
            <ToolButton onClick={ () => setDarkMode(!darkMode) }>Switch Theme</ToolButton>
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
