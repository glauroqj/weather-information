import React from 'react'
import ReactDOM from 'react-dom'

/** redux */
import { Provider } from 'react-redux'
import { store } from './store/store'

/** routes */
import Routes from './routes/Routes'

/** style */
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Theme } from './assets/style'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
