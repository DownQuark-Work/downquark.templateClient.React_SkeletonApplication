import type { ContextReducerAppType } from '../../flow/base/context/ReducerTypes'

import React, { useDebugValue, useReducer } from 'react'
import Routes from './Routes'
import RootReducer from './_context/reducers'

import appContextInitial from './_context/initializers'

export const RootContext:React$Context = React.createContext(appContextInitial)

const Root = () => {
  const [RootCntxt, RootCntxtDispatch] = useReducer(RootReducer, appContextInitial)
  return (
    <RootContext.Provider value={{ RootCntxt, RootCntxtDispatch }}>
      <Routes />
    </RootContext.Provider>
  )
}
Root.displayName = 'Root'
export default Root