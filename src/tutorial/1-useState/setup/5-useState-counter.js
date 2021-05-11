import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setvalue] = useState(0);
  const complexIncrease = () =>{
    setTimeout(() => {
      setvalue((prevState)=>{
        return prevState+1;
      });
    }, 2000);
  }
  return (
    <>
      <section style={{margin:'4rem 0'}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={()=>setvalue(value+1)}>Increase</button>
        <button className='btn' onClick={()=>setvalue(value-1)}>Decrease</button>
        <button className='btn' onClick={()=>setvalue(0)}>Reset</button>

        <h2 style={{margin:'4rem 0'}}>more complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>Increase in a bit</button>
      </section>
    
    </>
  )
};

export default UseStateCounter;
