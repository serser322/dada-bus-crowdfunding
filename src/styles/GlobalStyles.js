import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-text: #30475E;
    --color-grey-1: #828282;
    --color-grey-2: #9c9c9c;
  }

  html {
    font-family: "Noto Sans TC", sans-serif;
    box-sizing: border-box;
  }

`

export default GlobalStyles