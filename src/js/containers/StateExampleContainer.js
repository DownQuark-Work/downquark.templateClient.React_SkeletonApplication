import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import {RootContext} from '../base/Root'
import {UPDATE_ACTION} from '../base/_context/constants/reducers/root'
import Rndm from '../components/random'

type urlMatch = {
  isExact: boolean,
  params: {rnd: string},
  path: string,
  url: string
}

const StateExampleContainer = ({match}:React$Router) =>
{
  const rnd = match?.params?.rnd
  const {RootCntxt, RootCntxtDispatch} = useContext(RootContext)

  return (
    <div>
      <h2>Context Example Page</h2>
      <ul>
        <li>This value is taken from the url: {rnd}</li>
        <li>A child component is nested here:
              <ul><li>[<Rndm/>]</li></ul></li>
        <li>Date set by <i>useContext(RootContext)</i>:
              <ul><li>{RootCntxt.Root.DATE.toString()}</li></ul>
        </li>
        <li></li>
      </ul>
      <p>bye</p>
      <hr />
      <hr />
      <button onClick={() => {
        RootCntxtDispatch({type:UPDATE_ACTION, payload:null})}}>
          update the RootContext by using a reducer and watch the state change
      </button>
      <br/>The time reported on both instances above will update on button click
    </div>
  )

}
StateExampleContainer.displayName = 'StateExampleContainer'

export default StateExampleContainer