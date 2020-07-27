import React, { useCallback, useEffect, useState, useRef, useImperativeHandle } from 'react'
import { Link } from 'react-router-dom'

const useCustomHookToRenderDataList:$FlowTODO = (txt) => {
    const [value, setValue] = useState('');

    return {
      value,
      setValue,
      // enableButton: document.getElementById('useRefInput') && !!document.getElementById('useRefInput').innerText,
      add: useCallback(a => setValue(v => [...v, a])),
      clear: useCallback(() => setValue(() => [])),
      removeById: useCallback(id =>
        setValue(arr => (arr:any).filter(v => v && v.id !== id))
      ),
      removeIndex: useCallback(index =>
        setValue(v => {
          (v:any).splice(index, 1);
          return v;
        })
      )
    };
  };

const ListInputUseRef = () =>
{
  // textInput must be declared here so the ref can refer to it
  const textInput:React$Ref = useRef(null);
  const [inputVal, setInputVal] = useState('')
  // const {add} = useCustomHookToRenderDataList('')
    
  // const listToComponent = useCustomHookToRenderDataList('',true)
  
  function handleClick() {
    textInput.current.focus();
  }
  
  return (
    <div>
      <details>
        <summary>useRef()</summary>
        <p>You can, however, use the ref attribute inside a function component as long as you refer to a DOM element or a class component:</p>
      </details>
      <input id="useRefInput"
        onChange={(e)=>setInputVal(e.currentTarget.value)}
        type="text"
        ref={textInput}
        value={inputVal} />
      <input
        type="button"
        value="Focus input with useRef"
        onClick={handleClick}
      />
    </div>)
}

const DetailsSummaryForwardRefDomElement = React.forwardRef((props, ref) => (
  <details ref={ref}>
    <summary>{props.summary}</summary>
    {props.children}
  </details>
))

const DetailsSummaryForwardRef = () =>
{
  const ref = React.useRef();// You can now get a ref directly to the DOM button:
  setTimeout(()=>console.log('forward ref',ref),2000)
  return (
    <DetailsSummaryForwardRefDomElement ref={ref} summary='forwardRef()'>
      <p>Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child.
      <br/> ref still has to be applied to the DOM element itself but can then be passed back to a functional component
      <br/>View the console to see the <i>forward ref</i> information</p>
    </DetailsSummaryForwardRefDomElement>
  )
}


const ImperativeButton = React.forwardRef((props, forwardedRef) => {
  const btnDomRef:React$Ref = useRef(null); //this links the ImperativeButton Functional Component to the DOM
  useImperativeHandle(forwardedRef, ()=>({ //the useImperativeHandle bridges the functional component(s) to the DOM
    start:() => { console.log('you can do anything you want to the element', btnDomRef) },
    end:() => { console.log('as long as it is handled inside the imperative handle') },
    isEnabled:() => { if(btnDomRef.current.disabled){btnDomRef.current.disabled=!props.isEnabled}; console.log('See?',btnDomRef.current.disabled) },
    click:() => {btnDomRef.click()}
  }));
  return <button ref={btnDomRef} onClick={() =>props.listHook()}>{props.isEnabled ? 'add list item' : 'enter text above'}</button>
})

const ListForm = () =>
{
  return (<>
    <ListInputUseRef field='Name' />
    <DetailsSummaryForwardRef />
    <details>
      <summary>ImperativeHandle</summary>
      <p>In this example, a parent component that renders &lt;ImperativeButton ref={'{'}btnRef} /&gt; would be able to call <i>btnRef.current.disabled</i>().</p>
      <p>Check the console to see some log statements as well as the handling of the button being disabled</p>
    </details>
  </>)
}

const ListResults = () =>
{
  const numbers = ['Make', 'these', 'dynamic', 'fromm', 'form', 'submits'];
  const listItems = numbers.map((number) =>
  <li key={btoa(number)}>{number}</li>
);
  return (<ul>
    {listItems}
    <li>This is another piece of functionality that will not be completed for this template</li>
  </ul>)
}

const ListManager = () =>
{
  const btnRef = React.useRef(null)// this gets passed as `ref` to  link ListManager to the ImperativeButton functional component (NOT the dom)

  const addToList = (s) => {
    //TODO: This is a skeleton template so probably will not complete
  }
  const isEnabled = useCustomHookToRenderDataList('')
  return (<div>
    <h2>Example of Refs in Functional Components and a Custom Hook</h2>
    <ListForm />
    <ImperativeButton ref={btnRef} isEnabled={false} listHook={addToList} />
    <hr/>
    <ListResults />
  </div>)
}

ListManager.displayName = 'ListManagerPage'

export default ListManager