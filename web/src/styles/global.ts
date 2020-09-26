import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline: 0;
  }

  body {
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  p, textarea, strong, button, select {
    font-family: 'Roboto', sans-serif;
  }


  button {
    cursor: pointer;
  }
`;
