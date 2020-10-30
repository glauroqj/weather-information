import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset};

  html, body {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    webkit-font-smoothing: antialiased;
  }
`

export { GlobalStyle }