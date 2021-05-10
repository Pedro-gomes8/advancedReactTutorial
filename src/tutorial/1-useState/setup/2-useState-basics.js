import React, { useState } from 'react';
// useState - function from react (named export) that sets gives the ability to mess with states :D
/**
 * Hooks 
 *   starts with 'use'
 *   component name MUST be yppercase
 *   must be in function/component body
 *   cannot call conditionally
 */
const UseStateBasics = () => {
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value,handler);
  const [text,setText] = useState('Random title');
  const handleClick = ()=>{
    if (text==='Random title'){
    setText('I changed my title!');
    }else{
      setText('Random title');
    }
  }
  return (
  <>
  <h2>{text}</h2>
  <button className='btn' onClick={handleClick} > Change title</button>
  </>)
};

export default UseStateBasics;
