import weatherService from 'services/weatherService'
const WEATHER = {
  GET_WEATHER_STARTING: 'GET_WEATHER_STARTING',
  GET_WEATHER_DONE: 'GET_WEATHER_DONE',
  GET_WEATHER_ERROR: 'GET_WEATHER_ERROR'
}

/** fetch */
const fetchStarting = () => ({
  type: WEATHER.GET_WEATHER_STARTING,
  loading: true
})

const fetchDone = payload => ({
  type: WEATHER.GET_WEATHER_DONE,
  loading: false,
  data: payload
})

const fetchError = e => ({
  type: WEATHER.GET_WEATHER_ERROR,
  error: e,
  loading: false
})

const fetchWeatherService = payload => async dispatch => {
  dispatch(fetchStarting())

  try {
    const result = await weatherService(payload)
    if (result) dispatch( fetchDone(result) )
  } catch(e) {
    dispatch( fetchError(e) )
  }
}

export { WEATHER, fetchWeatherService }

/**
  API DOCS: https://openweathermap.org/weather-data
*/