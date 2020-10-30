import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
/** components */
import Loading from 'components/Loading/Loading'
/** pages */
const Home = lazy(() => import('pages/Home/Home'))

const Routes = () => {

  // const dispatch = useDispatch()

  return (    
    <BrowserRouter>
        {/* <ServiceWorker /> */}
        
        <Suspense fallback={ <Loading text='Loading...' /> }>
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect push to="/" />
          </Switch>
        </Suspense>

    </BrowserRouter>
  )
}

export default Routes
