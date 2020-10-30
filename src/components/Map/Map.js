import React, { useEffect, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
/** style */
import * as El from './Map.style'
/** actions */
import { loadingMapStart } from 'store/actions/mapActions'
/** components */
const Loading = lazy(() => import('components/Loading/Loading'))

const apiKey = process.env.REACT_APP_API_KEY_G

const Map = ({ history }) => {
  const dispatch = useDispatch()
  const { mapLoading, map } = useSelector(state => state.map)


  // if (loading) return <Loading text='Loading Map...' />

  useEffect(() => {
    renderMap( loadedMap )
  }, [])

  const loadedMap = () => {
    console.log('< MAP IS LAODED > ',)
    if (window.google) {
      let map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: -15.749997, lng: -47.9499962 },
        zoom: 8,
      });
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
    }
  }

  return <El.MapContainer id='map' />
}

export default Map
