import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100vh;
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }
  :root {
    --primary: #491D88;
    --secondary: #EF233C;
    --tertiary: #FFBA00;
    --quaternary: #80ED99;
    --quinary: #FFE66D;
    --senary: #331A38;
  
    --white: #fff;
    --disabled: #8a8c90;
    --dark: #010101;
  }

  button {
    transition: all 0.2s;

      &:hover {
        transform: scale(.98);
      }
  }
`