// @flow
import type { ContextReducerAppType } from '../../flow/base/context/ReducerTypes'
import React, {useDebugValue, useReducer} from 'react'

import AppReducer from './_context/reducers'
import appContextInitial from './_context/initializers'

const ProtoSnips = require('@downquark/proto-snips').Defaults()

export const AppContext:{
              Provider: React$ComponentType<{
                value: {AppCntxt:ContextReducerAppType, AppCntxtDispatch:any},
                children?: React$Node,
              }>,
              Consumer: React$ComponentType<{ children: (value: {AppCntxt:ContextReducerAppType, AppCntxtDispatch:<T:Action>(T)=>any}) => ?React$Node, ... }>,
              displayName?: string,
            } = React.createContext(appContextInitial)

type Props = {
  children: React$Node
}

const App = (props: Props): React$Node =>
{
  const { children } = props
  
  const [AppCntxt, AppCntxtDispatch]:[ContextReducerAppType, <T:Action>(T)=>any] = useReducer(AppReducer, appContextInitial)
  return <React.StrictMode>
          <AppContext.Provider value={{ AppCntxt, AppCntxtDispatch }}>
            {children}
          </AppContext.Provider>
        </React.StrictMode>
}
App.displayName = 'App'

export default App;
