import React, { useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
/** style */
import * as El from './Map.style'
/** actions */
import {
  loadingMapStart,
  loadingMapDone,
  mapUpdatePosition
} from 'store/actions/mapActions'
import { toogleSidebarAction } from 'store/actions/weatherActions'
/** components */
import Loading from 'components/Loading/Loading'

const apiKey = process?.env?.REACT_APP_API_KEY_GOOGLE

const Map = () => {
  const dispatch = useDispatch()
  const { position, mapLoading, error } = useSelector(state => state.map)

  useEffect(() => {
    renderMap( loadedMap )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const mapEvents = marker => {
    window.google.maps.event.addListener(marker, 'dragend', event => {
      const { lat, lng } = event.latLng

      dispatch(
        mapUpdatePosition({
          lat: lat().toFixed(3),
          lng: lng().toFixed(3)
        })
      )
    })

    window.google.maps.event.addListener(marker, 'dragstart', () => {
      dispatch( toogleSidebarAction(false) )
    })
  }

  const loadedMap = () => {
    /** load map and set in store */
    if (window.google) {
      const startMap = new window.google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 8,
      })

      const marker = new window.google.maps.Marker({
        position: position,
        map: startMap,
        draggable: true
      })

      const infoWindow = new window.google.maps.InfoWindow({
        content: "Drag the pin and click on button search to get informations!"
      })
      infoWindow.open(startMap, marker)

      dispatch( loadingMapDone() )
      /** handle map events */
      mapEvents(marker)
    }
  }

  const renderMap = callback => {
    /** check if sdk is already loaded */
    if ( !document.getElementById('googleMaps') ) {

      dispatch( loadingMapStart() )

      let tag = document.createElement('script')
      tag.async = true
      tag.defer = true
      tag.id = 'googleMaps'
      tag.onload = () => callback ? loadedMap() : null
      tag.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`
      document.body.appendChild(tag)
    } else {
      /** just load map */
      loadedMap()
    }
  }

  if (error) return <h4>{error}</h4>

  return (
    <>
      {mapLoading && (
        <El.MapContainerLoading>
          <Loading text='Loading map...' />
        </El.MapContainerLoading>
      )}
      <El.MapContainer id='map' />
    </>
  )
}

export default memo(Map)
