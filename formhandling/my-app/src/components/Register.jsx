import React, { useState } from 'react'

function Register() {
    const [formData,setFormData] =useState({"id":"","name":"","email":"","password":""});
    const inputHandler =(e)=>{
        const {name,value} =e.target;
        setFormData({ ...formData, [name]: value });
    }
    const submitHandler =(e)=>{
          e.preventDefault();
          console.log(formData);
    }
  return (
    <div>
      <h1 align="center">User Registeration form</h1>
      <div>
        <form onSubmit={submitHandler}>
            <p>
                <label for="id">ID</label>
                <input type="text" name="id" onChange={inputHandler} placeholder='enter user id' />
            </p>
             <p>
                <label for="name">Name</label>
                <input type="text" name="name" onChange ={inputHandler}placeholder='enter user name' />
            </p>
             <p>
                <label for="id">email</label>
                <input type="text" name="email" onChange={inputHandler} placeholder='enter user email' />
            </p>
             <p>
                <label for="password">Password</label>
                <input type="text" name="password" onChange={inputHandler} placeholder='enter user password' />
            </p>
            <p>
                <button>Register User</button>
            </p>
        </form>
      </div>
    </div>
  )
}

export default Register