import {
  createStore,
  applyMiddleware
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
/** reducers */
import reducers from './reducers/index'

const store = process.env.REACT_APP_ENVITONMENT === 'development'
  ? createStore(
    reducers, 
    composeWithDevTools(
      applyMiddleware(thunkMiddleware)
    )
  )
  : createStore(
    reducers, 
    applyMiddleware(thunkMiddleware)
  )

export { store }
