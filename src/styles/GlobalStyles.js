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
  }

  #root {
    /* height: 100%; */
    /* background-image: url('../../public/background.jpg'); */
    /* background-size: 100%; */
    position: relative;

    :after {
      content: ' ';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left:0;
      right:0;
      bottom: 0;
      background-image: url('../../public/background.png');
      background-size: 100%;
      opacity: .2;
      z-index:-2;
    }

  }
`

export default GlobalStyles