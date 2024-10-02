import React from 'react'

const RestaurantLogin = () => {
  return (
   <>
    <h3>Login Component</h3>
    <div className='input-wrapper'>
        <input type='text' placeholder='Enter Name'className='input-field'/>  
    </div>
    <div className='input-wrapper'>
        <input type='password' placeholder='Enter Password' className='input-field'/>  
    </div>
    <div className='input-wrapper'>
        <button className='button'>Login</button>  
    </div>
    </>
  )
}

export default RestaurantLogin;
