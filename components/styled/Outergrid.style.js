import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";

export const Outergrid = styled(Grid)`
  margin-top: ${props => props.mtmedium ? "20px" : props.mtlarge ? "30px" : props.mtsmall ? "10px" : "0px" };
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  display: flex;
`