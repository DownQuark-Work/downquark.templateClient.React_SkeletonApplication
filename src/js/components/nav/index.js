import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return(<>
    <Link to={'/state-example/'+(Math.floor(Math.random()*20)+1)}>Different types of state</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to={'/dom-ref-custom-hook'}>Dom Refs and Custom Hooks</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to={'/portal-error-log'}>Portals ErrorBounds and Logs</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to={'/use-effect-ref/'}>Use Effects and Refs</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </>)
}
Nav.displayName = 'Nav'
export default Nav