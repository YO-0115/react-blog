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
    transition: all 0.1s;
  
    &:hover {
      cursor: pointer;
    }
  }

  input {
    outline: none;
    border: none;
  }
  
  button {
    border: none;
    cursor: pointer;

    &:hover, 
    &:focus {
      outline: none;
    }
  }

  hr {
    border: none;
    border-bottom: 1px solid #ccc;
    margin-bottom: 16px;
  }
`

export default GlobalStyle
