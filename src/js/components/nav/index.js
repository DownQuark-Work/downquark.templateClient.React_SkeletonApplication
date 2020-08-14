import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../../js/base/_context/constants/app/base.json'

const Nav:React$DOM = () => {
  return(<>
    <Link to={routes.STATE_EXAMPLE.replace(':rnd','')+(Math.floor(Math.random()*20)+1)}>Different types of state</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to={routes.DOM_REF_CUSTOM_HOOK}>Dom Refs and Custom Hooks</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to={routes.PORTAL_ERR_LOG}>Portals ErrorBounds and Logs</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to={routes.USE_EFFECT_REF}>Use Effects and Refs</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to={routes.CONCURRENT_MODE}>Concurrent Mode</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </>)
}
Nav.displayName = 'Nav'
export default Nav