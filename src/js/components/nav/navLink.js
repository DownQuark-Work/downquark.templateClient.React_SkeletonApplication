import React, {useState} from 'react';

type Props = {
  children: React$Node,
  page:string
}
const NavLink = (props:Props):React$Node => {
  const {children, page} = props
  const [hovered, setHovered]:[bool,((bool=>bool)|bool)=>void] = useState(false)

  return (<a
        href={page || '#'}
        onMouseEnter={()=>{setHovered(true)}}
        onMouseLeave={()=>{setHovered(false)}}
      >
        {children}{hovered && ' !!'}
      </a>)
}
NavLink.displayName = 'NavLink'
export default NavLink