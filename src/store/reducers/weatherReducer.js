/* actions */
import { WEATHER } from '../actions/weatherActions'

/** initial state */
const initialState = {
  loading: true,
  error: false
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
