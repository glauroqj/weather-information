/* actions */
import { MAP } from 'store/actions/mapActions'

/** initial state */
const initialState = {
  mapLoading: true,
  position: {
    lat: -15.749,
    lng:-47.949
  }
}

const weather = (state = initialState, action) => {
  console.log('< MAP REDUCER > ', action)
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
    default:
      return state
  }
}

export default weather
