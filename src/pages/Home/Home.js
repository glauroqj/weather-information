import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
/** components */
import Loading from '../components/Loading'


const Home = ({ history }) => {
  // const dispatch = useDispatch()
  // const { account, loading } = useSelector(state => state.user)


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


  return (
    <div>
      HOME
    </div>
  )
}

export default Home