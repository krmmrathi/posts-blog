import Box from "@mui/material/Box";
import { styled } from "@mui/system";

export const Container = styled(Box)`
    margin-top: ${props => props.mtmedium ? "20px" : props.mtlarge ? "30px" : props.mtsmall ? "10px" : "0px" };
    padding: ${props => props.medium ? "20px" : props.large ? "30px" : props.small ? "10px" : "0px" };
    ${({ border }) => border && `
    border: 2px solid grey;
  `}
`;

