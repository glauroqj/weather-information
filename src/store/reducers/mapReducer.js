/* actions */
import { MAP } from 'store/actions/mapActions'

/** initial state */
const initialState = {
  mapLoading: true,
  position: {
    lat: -15.749,
    lng:-47.949
  },
  error: false
}

const weather = (state = initialState, action) => {
  switch (action.type) {
    case MAP.LOAD_MAP_DONE:
      return {
        ...state,
        mapLoading: action.loading
      }
    case MAP.MAP_UPDATE_POSITION:
      return {
        ...state,
        position: action.position
      }
    case MAP.LOAD_MAP_ERROR:
      return {
        ...state,
        mapLoading: action.loading,
        error: action.error
      }
    default:
      return state
  }
}

export default weather
