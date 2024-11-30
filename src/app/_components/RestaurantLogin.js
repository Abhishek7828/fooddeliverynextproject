"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const RestaurantLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const router = useRouter();

  const login = async() => {
    if(!error || !password){
      setError(true);
    }else {
      setError(false);
    }
    let response = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({email, password, login:true})
    })
    response = await response.json();
    if(response.success){
      const {result} = response
      delete result.password;
      localStorage.setItem("restaurantUser", JSON.stringify(result))
      router.push("/restaurent/dashboard")
      alert("Login succesfully")
    }else{
      alert("Login Failed")
    }
  }

  return (
   <>
    <h3>Login Component</h3>
    <div className='input-wrapper'>
        <input type='text' placeholder='Enter Name'className='input-field' value={email} onChange={(e)=> setEmail(e.target.value)}/>  
        {
            error && !email && <span className='input-error'>Please Enter Valid Email</span>
        }
    </div>
    <div className='input-wrapper'>
        <input type='password' placeholder='Enter Password' className='input-field' value={password} onChange={(e)=> setPassword(e.target.value)}/>  
        {
            error && !password && <span className='input-error'>Please Enter Valid Password</span>
        }
    </div>
    <div className='input-wrapper'>
        <button className='button' onClick={login}>Login</button>  
    </div>
    </>
  )
}

export default RestaurantLogin;
