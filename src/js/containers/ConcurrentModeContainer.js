import type {Match} from 'react-router-dom'

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import {AppContext} from '../base/App'
import {UPDATE_ACTION} from '../base/_context/constants/reducers/root'
import Rndm from '../components/random'

const ConcurrentModeContainer = () =>
{
  return (
    <div>
      <h2>ConcurrentModeContainer</h2>
    </div>
  )

}
ConcurrentModeContainer.displayName = 'ConcurrentModeContainer'

export default ConcurrentModeContainer