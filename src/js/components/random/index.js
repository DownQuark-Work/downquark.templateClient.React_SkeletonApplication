import React, { useContext, useRef, useState } from 'react'
import {AppContext} from '../../base/App'


const RandomNest = () => {
  return (<>
            { !!AppContext && <AppContext.Consumer>
              {({AppCntxt, AppCntxtDispatch}) => (
                <span>Date set by <i>&lt;AppContext.Consumer&gt;</i>: {AppCntxt.Root.DATE.toString()}</span>
              )}
            </AppContext.Consumer> }
          </>)
  }

export default RandomNest