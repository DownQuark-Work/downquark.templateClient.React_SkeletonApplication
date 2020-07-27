import * as React from 'react'

type Props = {
  children: React.Node
}

const App = (props: Props) =>
{
  const { children } = props

/* This filie is not a pointless abstraction 
  makes it easy for things like:
  <>
    <Modal/>
    {children}
    <FullScreenVideoBackground/>
  </>
  ...etc
*/

  return <React.StrictMode><>{children}</></React.StrictMode>
}
App.displayName = 'App'

export default App;
