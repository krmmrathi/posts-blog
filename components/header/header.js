import classes from './header.module.css';

import Link from "next/link";
import { useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { PostsContext } from "../../pages/_app";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(PostsContext);

  return (
    <Box>
      <AppBar position="static" className={darkMode ? classes.darkAppbar : classes.appbar}>
        <Toolbar variant="dense">
          <Typography variant="overline" component="div" className={classes.title}>
            A Proof Of Concept Related To Posts
          </Typography>
          <section className={classes.rightToolbar}>
            <Button className={classes.button} onClick={ () => setDarkMode(!darkMode) }>Switch Theme</Button>
            <Link href="/" passHref>
              <Button className={classes.button}>All Posts</Button>
            </Link>
            <Link href="/new" passHref>
              <Button className={classes.button}>Create New Post</Button>
            </Link>
          </section>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
