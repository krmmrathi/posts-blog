import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

export const Text = styled(Typography)`
    ${({ underline }) => underline && `
    text-decoration: underline;
  `}
`;