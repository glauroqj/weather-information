import weatherService from 'services/weatherService'
const WEATHER = {
  GET_WEATHER_STARTING: 'GET_WEATHER_STARTING',
  GET_WEATHER_DONE: 'GET_WEATHER_DONE',
  GET_WEATHER_ERROR: 'GET_WEATHER_ERROR',

  TOOGLE_SIDEBAR: 'TOOGLE_SIDEBAR'
}

/** fetch */
const fetchStarting = () => ({
  type: WEATHER.GET_WEATHER_STARTING,
  loading: true
})

const fetchDone = payload => ({
  type: WEATHER.GET_WEATHER_DONE,
  loading: false,
  data: payload.data,
  toggleSidebar: payload.toggleSidebar
})

const fetchError = e => ({
  type: WEATHER.GET_WEATHER_ERROR,
  error: e,
  loading: false
})

const toogleSidebarAction = value => ({
  type: WEATHER.TOOGLE_SIDEBAR,
  toggleSidebar: value
})

const fetchWeatherService = payload => async dispatch => {
  dispatch(fetchStarting())

  try {
    const result = await weatherService(payload)
    if (result) {
      dispatch( 
        fetchDone({
          data: result,
          toggleSidebar: true
        })
      )
    }
  } catch(e) {
    dispatch( fetchError(e) )
  }
}

export {
  WEATHER,
  fetchWeatherService,
  toogleSidebarAction
}

/**
  API DOCS: https://openweathermap.org/weather-data
*/