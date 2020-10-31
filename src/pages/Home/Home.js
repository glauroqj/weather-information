import React, { useState, useEffect, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
/** style */
import * as El from './Home.style'
/** components */
// const Loading = lazy(() => import('components/Loading/Loading'))
const Button = lazy(() => import('components/Button/Button'))
const Map = lazy(() => import('components/Map/Map'))

const Home = ({ history }) => {
  // const dispatch = useDispatch()
  const { position, mapLoading } = useSelector(state => state.map)

  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (!mapLoading && !showButton || params.get('lat') && params.get('lng')) setShowButton(true)

    /** update url after change pin position */
    if (!mapLoading) updateUrl()
  }, [position])

  const updateUrl = () => {
    const { lat, lng } = position
    const params = new URLSearchParams(window.location.search)
    /** check searchTerm first, only apply this feature if searchTerm !== '' */
    params.set('lat', lat)
    params.set('lng', lng)

    if ( params.get('lat') && params.get('lng') ) {
      window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
    } else {
      window.history.replaceState({}, '', `${window.location.pathname}`)
    }
  }
  // const callLoginService = async () => {

  //   const response = await dispatch( loginService() )

  //   if (response === 'email-not-allowed') {
  //     await dispatch( logoutService() )
  //     toast.error('Email não autorizado no momento!')
  //   }

  //   /** only in first access */
  //   if (response && response.displayName) {
  //     console.log('< redirect user >')
  //     // history.push('/timeline', {state: {account: {...account}}})
  //     window.location.href = ('/about')
  //   }

  // }

  // if (loading) return <Loading text='Loading home...' />

  return (
    <El.HomeContainer className='animated fadeIn'>

      {!mapLoading && (
        <El.HomeButtonContainer 
          className='animated fadeIn'
          show={showButton}
        >
          <Button
            actionClick={() => {}}
            size='lg'
            color='secondary'
          >
            Search
          </Button>
        </El.HomeButtonContainer>
      )}

      <Map />
    </El.HomeContainer>
  )
}

export default Home