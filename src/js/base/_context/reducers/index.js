import type { ContextReducerAppType } from '../../../../flow/base/context/ReducerTypes'

import appContextInitial from '../initializers'
import { RootReducer } from './root'

export default function AppReducer(
  state: ContextReducerAppType = appContextInitial,
  action: Action
){
  return {
    Root: RootReducer({...state.Root}, action)
  }
}