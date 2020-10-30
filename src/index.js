import React from 'react'
import ReactDOM from 'react-dom'

/** redux */
import { Provider } from 'react-redux'
import { store } from './store/store'

/** routes */
import Routes from './routes/Routes'

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
