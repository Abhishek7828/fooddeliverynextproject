import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const RestaurantSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [c_password, setc_Password] = useState("");
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const router = useRouter();
    const [error, setError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSignUp = async() => {
        if(password !== c_password){
            setPasswordError(true)
            return false
        }else{
            setPasswordError(false);
        }

        if(!email || !password || !c_password || !name || !address || !city || !contact){
            setError(true);
            return false
        }else{
            setError(false);
        }

        // console.log(email, password, c_password, name, address, city, contact);
        let response = await fetch("http://localhost:3000/api/restaurant", {
            method: "POST",
            body: JSON.stringify({email, password, name, address, city, contact})
        })
        response = await response.json();
        console.log("hello", response);
        if(response.success){
            const {result} = response
            delete result.password
            localStorage.setItem("restaurantUser", JSON.stringify(result));
            router.push("/restaurent/dashboard")
            alert("Restaurant Registered Successfully")
        }
    }
    
  return (
    <>
    <h3>Signup Component</h3>
    <div className='input-wrapper'>
        <input type='text' placeholder='Enter Email' className='input-field' value={email} onChange={(event)=> setEmail(event.target.value)}/>  
        {
            error && !email && <span className='input-error'>Please Enter Valid Email</span>
        }
    </div>
    <div className='input-wrapper'>
        <input type='password' placeholder='Enter Password' className='input-field' value={password} onChange={(event)=> setPassword(event.target.value) }/>  
        {
            passwordError && <span className='input-error'>password and confirm password not match</span>
        }
        {
            error && !password && <span className='input-error'>Please Enter Valid Password</span>
        }
    </div>
    <div className='input-wrapper'>
        <input type='password' placeholder='Enter Confirm Password' className='input-field' value={c_password} onChange={(event)=> setc_Password(event.target.value)}/>  
        {
            passwordError && <span className='input-error'>password and confirm password not match</span>
        }
        {
            error && !c_password && <span className='input-error'>Please Enter Valid Confirm Password</span>
        }
    </div>
    <div className='input-wrapper'>
        <input type='text' placeholder='Enter Restaurant Name' className='input-field' value={name} onChange={(event)=> setName(event.target.value)}/>  
        {
            error && !name && <span className='input-error'>Please Enter Valid Restaurant Name</span>
        }
    </div>
    <div className='input-wrapper'>
        <input type='text' placeholder='Enter City' className='input-field' value={city} onChange={(event)=> setCity(event.target.value)}/>  
        {
            error && !city && <span className='input-error'>Please Enter Valid City</span>
        }
    </div>
    <div className='input-wrapper'>
        <input type='text' placeholder='Enter Full Address' className='input-field' value={address} onChange={(event)=> setAddress(event.target.value)}/>  
        {
            error && !address && <span className='input-error'>Please Enter Valid Address</span>
        }
    </div>
    <div className='input-wrapper'>
        <input type='text' placeholder='Enter Contact No.' className='input-field' value={contact} onChange={(event)=> setContact(event.target.value)}/>  
        {
            error && !contact && <span className='input-error'>Please Enter Valid Contact No.</span>
        }
    </div>
    
    <div className='input-wrapper'>
        <button className='button' onClick={handleSignUp}>Sign Up</button>  
    </div>
    </>
  )
}

export default RestaurantSignup;
