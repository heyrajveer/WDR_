import React, { useState } from 'react'

function Login() {

  const [formData,setFormData] = useState({
    // id:"",
    // name:"",
    email:"",
    password:""
  });

  const inputHandler =(e)=>{
    const {name,value} = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const validate = () => {
    // if(formData.id === "" || formData.name === "" || formData.email === "" || formData.password === ""){
    //   alert("All fields are required");
    //   return false;
    // }
      if( formData.email === "" || formData.password === ""){
      alert("email and password required");
      return false;
    }

    if(formData.email !="Admin@123"){
      alert("Enter valid email");
      return false;
    }

    if(formData.password !="1234"){
      alert("wrong password");
      return false;
    }

    return true;
  }

  const submitHandler =(e)=>{
    e.preventDefault();

    if(validate()){
      console.log(formData);
      alert("Login Successful");
    }
  }

  return (
    <div>
      <h1 align="center">User Login form</h1>

      <div>
        <form onSubmit={submitHandler}>

            {/* <p>
                <label htmlFor="id">ID</label>
                <input type="text" name="id" onChange={inputHandler} placeholder='enter user id' />
            </p>

            <p>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={inputHandler} placeholder='enter user name' />
            </p> */}

            <p>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={inputHandler} placeholder='enter user email' />
            </p>

            <p>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={inputHandler} placeholder='enter user password' />
            </p>

            <p>
                <button type="submit">Login User</button>
            </p>

        </form>
      </div>
    </div>
  )
}

export default Login;