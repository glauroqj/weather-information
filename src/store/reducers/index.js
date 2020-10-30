import { combineReducers } from 'redux'

import weather from './weatherReducer'
import map from './mapReducer'

export default combineReducers({
  weather,
  map
})
