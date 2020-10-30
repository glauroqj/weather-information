import React, { Suspense, lazy } from 'react'

/** pages */
const Home = lazy(() => import('../pages/Home/Home'))
/** components */
const Loading = lazy(() => import('../components/Loading'))

const Routes = () => {

  const dispatch = useDispatch()

  return (    
    <BrowserRouter>
        <ServiceWorker />
        
        <Suspense fallback={ <Loading text='Carregando...' color='secondary' /> }>
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect push to="/" />
          </Switch>
        </Suspense>

    </BrowserRouter>
  )
}

export default Routes
