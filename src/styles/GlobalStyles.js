import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-text: #30475E;
    --red-text: #FA4C4C;
    --green-bar: #00FF66;
    --green-num:#00D12E;
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
    background-image: url('../../public/background.png');
    background-size: 60%;
  }

  #root {
    height: 100%;
  }
`

export default GlobalStyles