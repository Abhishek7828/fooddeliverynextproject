"use client"
import RestaurantHeader from '@/app/_components/RestaurantHeader';
import React, { useState } from 'react'
import '@/app/restaurent/style.css'
import AddFoodItem from '@/app/_components/AddFoodItem';

const Dashboard = () => {
  const[addItem, setAddItem] = useState(false);
  return (
    <div>
      <RestaurantHeader />
      <button onClick={()=>setAddItem(true)}>Add Food</button>
      <button onClick={()=>setAddItem(false)}>Dashboard</button>
      {
        addItem ? <AddFoodItem /> : <h1>Welcome to Restaurant dashboard</h1>
      }
    </div>
  )
}

export default Dashboard;