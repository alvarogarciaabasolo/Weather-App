import { createGlobalStyle } from "styled-components";

 const GlobalStyled = createGlobalStyle`
 :root {
  --color-primary: #1E213A;
  --color-secondary: #100E1D ;
 }
body{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
p {
  margin-top: 0;
  margin-bottom: 0;
}
`
export default GlobalStyled;