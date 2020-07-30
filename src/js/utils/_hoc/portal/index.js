import React from 'react'
import { createPortal } from 'react-dom'
import usePortal from './_context/hooks/portal'

/**
 * @example
 * <Portal>
 *   <p>PORTAL</p>
 * </Portal>
 */
type Props = {id:string, children:React$Node}
const Portal:(Props) => function = ({ id, children }) => {
  const target = usePortal(id);
  return createPortal(
    children,
    target,
  );
};

export default Portal;