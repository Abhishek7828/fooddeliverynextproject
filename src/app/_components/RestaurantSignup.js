import React, { useState } from 'react'

const RestaurantSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [c_password, setc_Password] = useState("");
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");

    const handleSignUp = () => {
       console.log(email, password, c_password, name, address, city, contact);
    }
    
  return (
    <>
    <h3>Signup Component</h3>
    <div className='input-wrapper'>
        <input type='text' placeholder='Enter Email' className='input-field' value={email} onChange={(event)=> setEmail(event.target.value)}/>  
    </div>
    <div className='input-wrapper'>
        <input type='password' placeholder='Enter Password' className='input-field' value={password} onChange={(event)=> setPassword(event.target.value) }/>  
    </div>
    <div className='input-wrapper'>
        <input type='password' placeholder='Enter Confirm Password' className='input-field' value={c_password} onChange={(event)=> setc_Password(event.target.value)}/>  
    </div>
    <div className='input-wrapper'>
        <input type='text' placeholder='Enter Restaurant Name' className='input-field' value={name} onChange={(event)=> setName(event.target.value)}/>  
    </div>
    <div className='input-wrapper'>
        <input type='text' placeholder='Enter City' className='input-field' value={city} onChange={(event)=> setCity(event.target.value)}/>  
    </div>
    <div className='input-wrapper'>
        <input type='text' placeholder='Enter Full Address' className='input-field' value={address} onChange={(event)=> setAddress(event.target.value)}/>  
    </div>
    <div className='input-wrapper'>
        <input type='text' placeholder='Enter Contact No.' className='input-field' value={contact} onChange={(event)=> setContact(event.target.value)}/>  
    </div>
    
    <div className='input-wrapper'>
        <button className='button' onClick={handleSignUp}>Sign Up</button>  
    </div>
    </>
  )
}

export default RestaurantSignup;
