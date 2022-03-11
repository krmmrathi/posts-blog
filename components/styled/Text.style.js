import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

export const Text = styled(Typography)`
    color: ${props => props.dark ? "white" : "black" };
    ${({ underline }) => underline && `
    text-decoration: underline;
  `}
`;