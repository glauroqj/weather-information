const WEATHER = {
  GET_WEATHER_STARTING: 'GET_WEATHER_STARTING',
  GET_WEATHER_DONE: 'GET_WEATHER_DONE',
  GET_WEATHER_ERROR: 'GET_WEATHER_ERROR'
}

/** fetch */
const fetchStarting = () => ({
  type: WEATHER.GET_WEATHER_STARTING
})

const fetchDone = payload => ({
  type: WEATHER.GET_WEATHER_DONE,
  loading: false
})

const fetchError = () => ({
  type: WEATHER.GET_WEATHER_ERROR,
  loading: false
})

const fetchWeatherService = () => async dispatch => {
  dispatch(fetchStarting())

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