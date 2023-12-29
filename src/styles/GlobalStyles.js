import { createGlobalStyle } from "styled-components";
import Background from "./../../public/background.png";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-text: #30475E;
    --red-text: #FA4C4C;
    --green-bar: #00FF66;
    --green-num:#00D12E;
    --green-1:#93FF97;
    --green-2:#12E01A;
    --gray-1: #828282;
    --gray-2: #E1E1E1;
  }

  html {
    font-family: "Noto Sans TC", sans-serif;
    color: var(--color-text);
    box-sizing: border-box;
    height: 100%;
  }

  body {
    height: 100%;
    position: relative;
    background-image: url(${Background});
    background-size: 60%;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyles;