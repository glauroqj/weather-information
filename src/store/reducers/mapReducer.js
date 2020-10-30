/* actions */
import { MAP } from '../actions/mapActions'

/** initial state */
const initialState = {
  mapLoading: true,
  map: null
}

const weather = (state = initialState, action) => {
  console.log('< MAP REDUCER > ', action)
  switch (action.type) {
    case MAP.LOAD_MAP_DONE:
      return {
        ...state,
        map: action.map,
        mapLoading: action.loading
      }
    default:
      return state
  }
}

export default weather
