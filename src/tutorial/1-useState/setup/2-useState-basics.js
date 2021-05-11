import React, { useState } from 'react';
// useState - function from react (named export) that sets gives the ability to mess with states :D
/**
 * Hooks 
 *   starts with 'use'
 *   component name MUST be yppercase
 *   must be in function/component body
 *   cannot call conditionally
 */
const listofTitles=['Oii eu sou o primeiro','to aqui no segundo','fui pro terceiro','o que eu vou fazer','so to enrolando','pra ter titles suficientes']

const UseStateBasics = () => {
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value,handler);
  let index = 0;
  const [text,setText] = useState(listofTitles[index]);
  const handleClick = ()=>{
    if (text === 'pra ter titles suficientes'){
      index = 0
      setText(listofTitles[index])
    }else{
      index++;
      setText(listofTitles[index])
    }
  }
  return (
  <>
  <h2>{text}</h2>
  <button className='btn' onClick={handleClick} > Change title</button>
  </>)
};

export default UseStateBasics;
