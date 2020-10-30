import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    webkit-font-smoothing: antialiased;
  }
`

export { GlobalStyle }