import React from 'react'
import Child from './Child';

function Parent() {
 const name ="student";
 const info ={
    id:1,
    "name" :"rohit",
    "age":30,

 }
 function disp(){
    alert("welcome"+" "+ info.name)
 }
  return (
    
    <div>
    
      <h1 align="center">Prent components</h1>
      {/* <Child  data={name} data1={info} fun ={disp()}/> */}
      <Child  data={name} data1={info} fun ={disp}/>
    </div>
  )
}

export default Parent
