import React, { useContext, useEffect, useState, useRef } from 'react'

const UseEffectRef = () =>
{
  const newRnd = () => Math.ceil(Math.random()*20)
  const [rndNum, setRndNum] = useState(newRnd)
  const rndNumRef = useRef(rndNum);

  useEffect(() => {
    const fetched = fetch(`https://swapi.dev/api/people/${rndNum}/`)
    .then(obj => obj.json()).then(o => {
      const swapiDiv = document.getElementById('swapi')
        if(swapiDiv){swapiDiv.innerText = o.name}
    })
    .catch(err => console.error(err))
  }, [rndNum])
  

  return (
    <div>
      <h2>Example of useEffect and useRef</h2>
      <hr />
      <ul>
        <li>USE EFFECT:
            <ul>
              <li>The bold text below is set when a promise resolves from an async call</li>
              <li>
                <a href={'https://swapi.dev/api/people/'+rndNum} target="_blank">https://swapi.dev/api/people/{rndNum}/</a> [note the number given the FIRST time the page loads ({rndNum})]
                <br/>(for some reason <i>17</i> is undefined)
              </li>
              <li id="swapi" style={{fontWeight:800,paddingLeft:'5%'}}></li>
              <li>On completion a previously rendered page has a DOM update - resulting in the <i>useEffect</i> being needed</li>
              <li>Now click the "CLICK ME" text below a few times to see some other character names</li>
              <li>The url will also update to show the new query.
                  <ul>
                    <li>But what if we wanted to hold onto the original value?</li>
                    <li>Well, it was: <b><u>{rndNumRef.current}</u></b></li>
                    <li>refresh the page and look at the number in the url</li>
                    <li>it matches the bold number above</li>
                    <li>Now click the "CLICK ME" text below and compare the results</li>
                  </ul>
              </li>
            </ul>
        </li>
      </ul>
      <div onClick={()=>setRndNum(newRnd())}><u>CLICK ME</u>: call <i>useState</i> to get a new star wars character</div>
      <br/>
    </div>
  )
}
UseEffectRef.displayName = 'UseEffectRefPage'

export default UseEffectRef