'use client'
import React, { useState } from 'react'
import RestaurantLogin from '../_components/RestaurantLogin'
import RestaurantSignup from '../_components/RestaurantSignup'
import RestaurantHeader from '../_components/RestaurantHeader'
import './style.css';
import RestaurantFooter from '../_components/RestaurantFooter'

const Restaurant = () => {
    const [login, setLogin] = useState(true);
    return (
        <>
            <div className='container'>
                <RestaurantHeader />
                <h1>Restaurant Login/Signup Page</h1>
                {
                    login ? <RestaurantLogin /> : <RestaurantSignup />
                }
                <div>
                    <button onClick={() => setLogin(!login)} className='button-link'>
                        {
                            login ? "Do not have an account? Signup" : "Already have an account? Login"
                        }
                    </button>
                </div>
            </div>
            <RestaurantFooter />
        </>
    )
}

export default Restaurant
