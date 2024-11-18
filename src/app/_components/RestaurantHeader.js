"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const RestaurantHeader = () => {
  const [details, setDetails] = useState();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(()=> {
    let data = localStorage.getItem("restaurantUser")
    if(!data && pathName == "/restaurent/dashboard"){
      router.push("/restaurent")
    }else if(data && pathName== "/restaurent"){
      router.push("/restaurent/dashboard")
    }else{
      setDetails(JSON.parse(data))
    }
  },[]);

  const logout = () => {
    localStorage.removeItem("restaurantUser")
    router.push("/restaurent")
  }

  return (
    <div className='header-wrapper'>
      <div className='logo'>
        <img style={{width:100}} src='data:image/jpeg;base64,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'/>
      </div>
      <ul>
        <li>
            <Link href='/'>Home</Link>
        </li>
        <li>
            <Link href='/about'>About</Link>
        </li>
        {details && details?.name ? 
          <>
            <li><button onClick={logout}>Logout</button></li>
            <li>
                <Link href='/profile'>Profile</Link>
            </li> 
          </>
        : <li>
            <Link href='/'>Login/Signup</Link>
        </li>}
      </ul>
    </div>
  )
}

export default RestaurantHeader;
