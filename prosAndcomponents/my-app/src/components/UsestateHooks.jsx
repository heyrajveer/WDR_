import React, { useState } from 'react'
import "./usestate.css";

const UsestateHooks = () => {
  const [counter,setCounter] =useState(0);
    const incease =()=>{
       // counter = counter + 1;
       setCounter(counter + 1);
        console.log(counter);
    }
      const decrease =()=>{
      
       setCounter(counter -1);
        console.log(counter);
    }
     const reset =()=>{
      
     
       setCounter(0);
        console.log(counter);
    }
  return (
    <div>
      <h2>Counter Example</h2>
      <p>Counter: {counter}</p>
      <button onClick={incease}>Increase Counter</button>
        <button onClick={decrease}>decrease Counter</button>
        <button onClick={reset}>reset Counter</button>
    </div>
  )
}
export default UsestateHooks