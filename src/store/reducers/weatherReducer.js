/* actions */
import { WEATHER } from 'store/actions/weatherActions'

/** initial state */
const initialState = {
  loading: false,
  error: false,
  data: [],
  isVisibleSidebar: false
}

const weather = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER.GET_WEATHER_STARTING:
      return {
        ...state,
        loading: action.loading
      }
    case WEATHER.GET_WEATHER_DONE:
      return {
        ...state,
        loading: action.loading,
        data: action.data,
        isVisibleSidebar: action.toggleSidebar
      }
    case WEATHER.GET_WEATHER_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
    case WEATHER.TOOGLE_SIDEBAR:
      return {
        ...state,
        isVisibleSidebar: action.toggleSidebar
      }
    default:
      return state
  }
}

export default weather
