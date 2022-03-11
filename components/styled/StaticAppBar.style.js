import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/system";

export const StaticAppBar = styled(AppBar)`
  background-color: ${props => props.dark ? "rgb(30, 30, 30)" : "rgb(230, 230, 230)" };
  color: ${props => props.dark ? "white" : "black" };
  position: static;
`