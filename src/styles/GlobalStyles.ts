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
    --quaternary: #F17105;
    --quinary: #43B5A0;
    --senary: #331A38;
  
    --white: #fff;
    --gray: #8a8c90;
    --dark: #010101;
  }
`