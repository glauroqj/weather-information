const MAP = {
  LOAD_MAP_STARTING: 'LOAD_MAP_STARTING',
  LOAD_MAP_DONE: 'LOAD_MAP_DONE',
  LOAD_MAP_ERROR: 'LOAD_MAP_ERROR'
}

/** fetch */
const loadingMapStart = () => ({
  type: MAP.LOAD_MAP_STARTING
})

const loadingMapDone = payload => ({
  type: MAP.LOAD_MAP_DONE,
  mapInstance: payload.mapInstance,
  mapMarker: payload.mapMarker,
  mapLoading: false
})

const loadingMapError = () => ({
  type: MAP.LOAD_MAP_ERROR,
  loading: false,
  error: 'Something is wrong when load google maps'
})

export {
  MAP,
  loadingMapStart,
  loadingMapDone,
  loadingMapError
}
