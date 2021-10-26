import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.backgroundColor};
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
    background: none;
  }
  
  button {
    border: none;
    cursor: pointer;
    background: none;

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
