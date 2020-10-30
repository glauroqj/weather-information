import React, { useEffect, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
/** components */
const Loading = lazy(() => import('../../components/Loading/Loading'))


const Home = ({ history }) => {
  // const dispatch = useDispatch()
  const { loading } = useSelector(state => state.weather)


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

  if (loading) return <Loading text='Loading home...' />

  return (
    <div>
      HOME
    </div>
  )
}

export default Home