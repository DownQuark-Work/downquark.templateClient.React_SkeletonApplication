import React, {useState} from 'react';
import Portal from '../components/portal'

const PortalErrorLog = () =>
{
  const [displayPortal, setDisplayPortal] = useState(false)

  return (<div>
    <br/><br/><button type="button" onClick={()=>setDisplayPortal(!displayPortal)}>Toggle Portal</button><br/>
    {displayPortal && <Portal id="portal"><p>I am INSIDE A PORTAL!</p></Portal>}
  </div>)
}
PortalErrorLog.displayName = 'PortalErrorLogPage'

export default PortalErrorLog