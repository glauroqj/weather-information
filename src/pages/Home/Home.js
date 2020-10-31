import React, { useState, useEffect, Suspense, lazy, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
/** style */
import * as El from './Home.style'
/** components */
import Map from 'components/Map/Map'
import HomeButtonContainer from './_homeButtonContainer'

const Home = ({ history }) => {
  // const dispatch = useDispatch()
  // const { position, mapLoading } = useSelector(state => state.map)
  
  // const { loading, error, data } = useSelector(state => state.weather)

  // useEffect(() => {
  //   /** update url after change pin position */
  //   if (!mapLoading) updateUrl()
  // }, [position])

  // const updateUrl = () => {
  //   const { lat, lng } = position
  //   const params = new URLSearchParams(window.location.search)
  //   /** check searchTerm first, only apply this feature if searchTerm !== '' */
  //   params.set('lat', lat)
  //   params.set('lng', lng)

  //   if ( params.get('lat') && params.get('lng') ) {
  //     window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
  //   } else {
  //     window.history.replaceState({}, '', `${window.location.pathname}`)
  //   }
  // }

  return (
    <El.HomeContainer className='animated fadeIn'>
      
      <HomeButtonContainer />
      <Map />

    </El.HomeContainer>
  )
}

export default memo(Home)