import React, { useContext, useRef, useState } from 'react'
import {RootContext} from '../../base/Root'


const RandomNest = () => {
  return (<>
            { !!RootContext && <RootContext.Consumer>
              {({RootCntxt, RootCntxtDispatch}) => (
                <span>Date set by <i>&lt;RootContext.Consumer&gt;</i>: {RootCntxt.Root.DATE.toString()}</span>
              )}
            </RootContext.Consumer> }
          </>)
  }

export default RandomNest