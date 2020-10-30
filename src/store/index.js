import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
/** reducers */
import reducers from './reducers/index'

const store = createStore(reducers, applyMiddleware(thunk))

export { store }
