import React from 'react'
import Grandchild from './Grandchild';

function Child(props) {
    // console.log(props);
    const req =props.fun;
  return (

    <div>
      <h1>child components</h1>
      <p> Parent Data: {props.data}</p>
      <p>studentID:{props.data1.id}</p>
      <p>{req}</p>
       {/* <p>{req()}</p> */}
       <button onClick={req}>submit</button>

      <Grandchild data={props.data}/>
      
    </div>
  )
}

export default Child
