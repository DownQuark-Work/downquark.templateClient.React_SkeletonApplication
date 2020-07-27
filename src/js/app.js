import "@babel/polyfill"
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader'
import Root from './base/Root'

// Prototypes() // TODO: replace with proto-snippets

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer

const rootElem = document.getElementById('root')
if (rootElem)
{
  ReactDOM.render(
    <AppContainer>
      <Root />
    </AppContainer>,
    rootElem
  )
}

if((module: any).hot && rootElem)
{
  (module: any).hot.accept(() =>
  {
    // eslint-disable-next-line global-require
    const NextRoot = require('./base/Root').default
    ReactDOM.render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      rootElem
    )
  })
}
