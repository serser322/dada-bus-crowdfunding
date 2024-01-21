import { createGlobalStyle } from "styled-components";
import Background from "./../../public/background.png";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-text: #30475E;
    --red-text: #FA4C4C;
    --pink-1:#EB7A82;
    --pink-2:#ff928a;
    --pink-3:#ba685b;
    --yellow-1: #FDC879;
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

  .ReactModal__Overlay {
    opacity: 0;
    transform: translateY(-50px);
    transition: all 0.2s ease-in-out;
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
    transform: translateY(0px);
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
    transform: translateY(-50px);
  }

  .ReactModal__Content {
    max-height: 330px;
    height: 100%;
    width: 300px;

    @media (min-width: 640px) {
      max-height: 300px;
      width: 400px;
    }
  }
`;

export default GlobalStyles;
