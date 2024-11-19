import React, { useEffect, useState } from 'react'

const AddFoodItem = () => {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [path, setPath] = useState();
    const [description, setDescription] = useState();

    const handleAddFoodItem = async() => {
      let resto_id;
        // console.log("hdhdhj", name, price, path, description);
        const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
        if(restaurantData){
          resto_id=restaurantData?._id
        }
        console.log("hpl", restaurantData);
        
        let response = await fetch("http://localhost:3000/api/restaurant/foods",{
            method: "POST",
            body: JSON.stringify({name, price, img_path: path, description, resto_id})
        });
        response = await response.json();
        console.log("res", response);
        if(response.success){
          alert("FOOD ITEMS ADDED SUCCESSFULLY")
        }
    }
  return (
    <div className='container'>
      <h1>ADD NEW FOOD ITEMS</h1>
      <div className='input-wrapper'>
        <input type='text' className='input-field' value={name} placeholder='Enter Food Name' onChange={(e)=> setName(e.target.value)}/>
      </div>
      <div className='input-wrapper'>
        <input type='text' className='input-field' value={price} placeholder='Enter Price' onChange={(e)=> setPrice(e.target.value)}/>
      </div>
      <div className='input-wrapper'>
        <input type='text' className='input-field' value={path} placeholder='Enter Image Link' onChange={(e)=> setPath(e.target.value)}/>
      </div>
      <div className='input-wrapper'>
        <input type='text' className='input-field' value={description} placeholder='Enter Description' onChange={(e)=> setDescription(e.target.value)}/>
      </div>
      <div className='input-wrapper'>
        <button className='button' onClick={handleAddFoodItem}>Add Food Item</button>
      </div>
    </div>
  )
}

export default AddFoodItem
