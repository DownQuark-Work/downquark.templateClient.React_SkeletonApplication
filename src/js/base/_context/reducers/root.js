import type { ContextReducerRootType } from '../../../../flow/base/context/ReducerTypes'

import * as RootConstant from '../constants/reducers/root'
import rootContextInitial from '../initializers/root'

export const RootReducer = (
  state:ContextReducerRootType = rootContextInitial,
  action: Action
) =>
{
  switch (action.type)
  {
    case RootConstant.PSEUDO_ACTION:
      return {
        ...state,
        DATE: new Date(15853885809384)
      }
    case RootConstant.UPDATE_ACTION:
      return {
        ...state,
        DATE: new Date()
      }
    default:
      return state
  }
}