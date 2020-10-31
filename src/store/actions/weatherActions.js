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
  data: payload.data
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

  } catch(e) {
    fetchError(e)
  }

  // const list = await fetch(
  //   'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog'
  // )
  // const finalList = await list.json()
  // console.log('< LIST > ', finalList)

  // if (finalList) dispatch(fetchDone(finalList))
  // if (!finalList) dispatch(fetchError())
}

export { WEATHER, fetchWeatherService }

/**
  API DOCS: https://openweathermap.org/weather-data
*/