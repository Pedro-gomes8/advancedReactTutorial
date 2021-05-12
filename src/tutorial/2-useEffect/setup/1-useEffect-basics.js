import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
// work outside component signing up for subscription etc
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(()=>{
    if (value > 0){
    document.title = `New messages(${value})`
  }else{
    document.title = 'Normal title'
  }
  });
  return <>
  <h1>{value}</h1>
  <button className='btn' onClick={()=>setValue((prevState)=> prevState+1)}>click me</button>
  <button className='btn' onClick={()=> setValue(0)}>Reset</button>
  </>;
};

export default UseEffectBasics;
