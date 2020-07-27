import type { ContextReducerRootType } from '../../../../flow/base/context/ReducerTypes'

import { version } from '../../../../../package.json'

const contextRootInitial: ContextReducerRootType = {
  AVAILABLITY: 'ENTIRE APPLICATION',
  DATE: new Date(),
  VERSION: version,
}
export default contextRootInitial