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

// export default function Outergrid({children}) {
//     return (
//       <Containergrid>
//         {children}
//       </Containergrid>
//     );
//   }


// //notice the syntax
// const Outergrid2 = styled(Grid, {
//   name: "Outergrid",
//   slot: "Wrapper"
// })({
//   color: "#6B8068",
//   //backgroundImage: `url("https://picsum.photos/200/300")`,
//   backgroundColor: "silver",
//   margin: "auto",
//   borderRadius: 2,
//   height: 300,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   ".MuiButton-root": { color: "#FF0000" }
// });

// //Tick mark syntax also works
// const StyledPaper2 = styled(Paper, {
//   name: "StyledPaper2",
//   slot: "Wrapper"
// })`
//   color: red;
//   height: 300px;
//   background-image: url("https://picsum.photos/200/300");
// `;