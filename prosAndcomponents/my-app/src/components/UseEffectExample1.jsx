import React, { useEffect, useState } from 'react'

function UseEffectExample1() {
    const [counter,setCounter]=useState(0);

    const increaseCounter =()=>{
        setCounter(counter+1);
    }
   useEffect(()=> {const showMsg=()=>{
        console.log("welcome user->"+counter);
       
    }
    showMsg();
  },[counter==9]);
  
  return (
    <div>
        <h1>UseEffect Example</h1>
        <p>Counter :{counter}</p>
        <button onClick={increaseCounter}>increase</button>
      
    </div>
  )
}

export default UseEffectExample1
