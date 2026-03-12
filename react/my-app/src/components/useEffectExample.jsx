// import React, { useState } from 'react'

// function useEffectExample() {
//     const [counter,setCounter]=useState(0);
//     // const [msg,setMsg]=useState("");
//     const increaseCounter =()=>{
//         setCounter(counter+1);
//         console.log(counter);
//     }
//     const looping =()=>{
//       for(let i=1;i<100;i++){
//         console.log(i);
//       }
//     }
  
//   return (
//     <div>
         
//       <p>Counter:{counter}</p>
//       <button onClick={increaseCounter}>Increase</button>
//     </div>
//   )
// }

// export default useEffectExample;
import React, { useState } from 'react'

function useEffectExample() 
{
    const [counter,setCounter] =useState(0)
    const inceaseCounter =()=>{
        setCounter(counter + 1);
        console.log(counter);
    }
   const showMsg =()=>{
    console.log("Hello User");
   }
   showMsg();
  return (
    
    <div>
       
      <p>Counter:{counter}</p>
      <button onClick={inceaseCounter}>Increase Counter</button>
     
    </div>
  )
}

export default useEffectExample