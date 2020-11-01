const MAP = {
  LOAD_MAP_STARTING: 'LOAD_MAP_STARTING',
  LOAD_MAP_DONE: 'LOAD_MAP_DONE',
  LOAD_MAP_ERROR: 'LOAD_MAP_ERROR',

  MAP_UPDATE_POSITION: 'MAP_UPDATE_POSITION'
}

/** fetch */
const loadingMapStart = () => ({
  type: MAP.LOAD_MAP_STARTING
})

const loadingMapDone = () => ({
  type: MAP.LOAD_MAP_DONE,
  mapLoading: false
})

const loadingMapError = () => ({
  type: MAP.LOAD_MAP_ERROR,
  mapLoading: false,
  error: 'Something is wrong when load google maps'
})

const mapUpdatePosition = payload => ({
  type: MAP.MAP_UPDATE_POSITION,
  position: payload
})

export {
  MAP,
  loadingMapStart,
  loadingMapDone,
  loadingMapError,
  mapUpdatePosition
}
