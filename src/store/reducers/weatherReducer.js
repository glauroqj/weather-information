/* actions */
import { WEATHER } from 'store/actions/weatherActions'

/** initial state */
const initialState = {
  loading: false,
  error: false,
  mapLoading: true,
  map: null
}

const weather = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER.GET_WEATHER_DONE:
      return {
        ...state,
        loading: action.loading
      }
    default:
      return state
  }
}

export default weather
