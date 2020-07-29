import React, {useState} from 'react';
import Portal from '../utils/_hoc/portal'
import {ErrorBoundary} from '../utils/_hoc/error_boundary'

const PortalErrorButton = () => 
{
  const [throwIt, setThrowIt] = useState(false)

  if(throwIt){throw new Error('I crashed!')}
  return (<button type="button" onClick={()=>{setThrowIt(true)}}>I throw errors</button>)
}
const PortalErrorLog = () =>
{
  const [displayPortal, setDisplayPortal] = useState(false)

  return (<div>
    <br/><br/><button type="button" onClick={()=>setDisplayPortal(!displayPortal)}>Toggle Portal</button><br/>
    {displayPortal && <Portal id="portal"><p>I am INSIDE A PORTAL!</p></Portal>}
    <br/><br/>
    <ErrorBoundary>
      <PortalErrorButton/>
    </ErrorBoundary>
  </div>)
}
PortalErrorLog.displayName = 'PortalErrorLogPage'

export default PortalErrorLog