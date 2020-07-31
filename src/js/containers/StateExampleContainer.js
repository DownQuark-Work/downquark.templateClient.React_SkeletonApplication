import type {Match} from 'react-router-dom'

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import {AppContext} from '../base/App'
import {UPDATE_ACTION} from '../base/_context/constants/reducers/root'
import Rndm from '../components/random'

const StateExampleContainer = ({match}: {match: Match}) =>
{
  const rnd = match?.params?.rnd
  const {AppCntxt, AppCntxtDispatch} = useContext(AppContext)

  return (
    <div>
      <h2>Context Example Page</h2>
      <ul>
        <li>This value is taken from the url: {rnd}</li>
        <li>A child component is nested here:
              <ul><li>[<Rndm/>]</li></ul></li>
        <li>Date set by <i>useContext(AppContext)</i>:
              <ul><li>{AppCntxt.Root.DATE.toString()}</li></ul>
        </li>
        <li></li>
      </ul>
      <p>bye</p>
      <hr />
      <hr />
      <button onClick={() => {
        AppCntxtDispatch({type:UPDATE_ACTION, payload:null})}}>
          update the AppContext by using a reducer and watch the state change
      </button>
      <br/>The time reported on both instances above will update on button click
    </div>
  )

}
StateExampleContainer.displayName = 'StateExampleContainer'

export default StateExampleContainer