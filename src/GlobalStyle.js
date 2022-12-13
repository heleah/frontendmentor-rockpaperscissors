import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-family: sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(
      to bottom,
      hsl(214, 47%, 23%) 0%,
      hsl(237, 49%, 15%) 100%
    );
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root,
  #__next {
    isolation: isolate;
  }
`;
