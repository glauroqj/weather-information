/* actions */
import { MAP } from 'store/actions/mapActions'

/** initial state */
const initialState = {
  mapLoading: true,
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
        mapLoading: action.loading
      }
    default:
      return state
  }
}

export default weather
