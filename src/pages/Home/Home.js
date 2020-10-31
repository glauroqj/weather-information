import React, { useEffect, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
/** style */
import * as El from './Home.style'
/** components */
// const Loading = lazy(() => import('components/Loading/Loading'))
const Button = lazy(() => import('components/Button/Button'))
const Map = lazy(() => import('components/Map/Map'))

const Home = ({ history }) => {
  // const dispatch = useDispatch()
  const { position } = useSelector(state => state.map)

  useEffect(() => {
    console.log('< HOME > ', position)
  }, [position])
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
      <Button
        actionClick={() => {}}
        size='sm'
        color='primary'
      >
        Search
      </Button>
      <Map />
    </El.HomeContainer>
  )
}

export default Home