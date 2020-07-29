import React, {useContext,useState} from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { routes } from './_context/constants/app/base.json'
import Nav from '../components/nav'
import App from './App'

import ListManager from '../containers/FunctionalDOMRefCustomHook'
import PortErrLog from '../containers/PortalErrorLog'
import StateExampleContainer from '../containers/StateExampleContainer'
import UseEffectRefPage from '../containers/UseEffectRef'

const Routes = (props:React$Router) => {
  const routeArr = []
  return (<App>
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route exact path={routes['/']}>
          <Redirect to={routes.STATE_EXAMPLE.replace('/:rnd','')+'/'+Math.ceil(Math.random()*20)} />
        </Route>
        <Route path={routes.PORTAL_ERR_LOG} component={PortErrLog} />
        <Route path={routes.STATE_EXAMPLE} component={StateExampleContainer} />
        <Route path={routes.DOM_REF_CUSTOM_HOOK} component={ListManager} />
        <Route path={routes.USE_EFFECT_REF} component={UseEffectRefPage} />
        <Route>
          <div>404</div>
        </Route>
      </Switch>
    </BrowserRouter>
  </App>)
}
Routes.displayName = 'Routes'
export default Routes