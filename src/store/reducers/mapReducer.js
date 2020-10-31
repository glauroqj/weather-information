/* actions */
import { MAP } from 'store/actions/mapActions'

/** initial state */
const initialState = {
  mapLoading: true,
  position: {
    lat: -15.749997,
    lng:-47.9499962
  },
  mapInstance: null,
  mapMarker: null
}

const weather = (state = initialState, action) => {
  console.log('< MAP REDUCER > ', action)
  switch (action.type) {
    case MAP.LOAD_MAP_DONE:
      return {
        ...state,
        mapInstance: action.mapInstance,
        mapMarker: action.mapMarker,
        mapLoading: action.loading
      }
    default:
      return state
  }
}

export default weather
