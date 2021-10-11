import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
    display: flex;
  
    &:hover {
      text-decoration: none;
    }
  }
  
  a:hover {
    cursor: pointer;
  }

  input {
    outline: none;
    border: none;
  }
  
  button {
    border: none;
    cursor: pointer;
  }
  button:hover, button:focus {
    outline: none;
  }
`

export default GlobalStyle
