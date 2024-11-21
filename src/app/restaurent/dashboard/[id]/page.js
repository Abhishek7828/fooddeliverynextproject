'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const EditFoodItem = (props) => {
    const foodItemId = props.params.id
    console.log("propms.id", foodItemId);
    
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [path, setPath] = useState();
    const [description, setDescription] = useState();

    const [error, setError] = useState(false);
    const router = useRouter();
    const handleBack = () => {
        router.push("../dashboard")
    }

    const handleUpdateFoodItem = async() => {
      if(!name || !price || !path || !description){
        setError(true);
        return false
      }else{
        setError(false);
      }
    
    }

    const handleLoadFoodItem = async () => {
        let response = await fetch(`http://localhost:3000/api/restaurant/foods/edit/${foodItemId}`);
        response = await response.json();
        console.log("ffttt", response);
        
        if(response.success){
            setName(response.result.name);
            setPrice(response.result.price);
            setPath(response.result.img_path);
            setDescription(response.result.description);
        }
    }

    useEffect(()=> {
        handleLoadFoodItem();
    },[]);

  return (
    <div className='container'>
      <h1>UPDATE NEW FOOD ITEMS</h1>
      <div className='input-wrapper'>
        <input type='text' className='input-field' value={name} placeholder='Enter Food Name' onChange={(e)=> setName(e.target.value)}/>
        {
          error && !name && <span className='input-error'>Please enter valid name</span>
        }
      </div>
      <div className='input-wrapper'>
        <input type='text' className='input-field' value={price} placeholder='Enter Price' onChange={(e)=> setPrice(e.target.value)}/>
        {
          error && !price && <span className='input-error'>Please enter valid price</span>
        }
      </div>
      <div className='input-wrapper'>
        <input type='text' className='input-field' value={path} placeholder='Enter Image Link' onChange={(e)=> setPath(e.target.value)}/>
        {
          error && !path && <span className='input-error'>Please enter valid image path</span>
        }
      </div>
      <div className='input-wrapper'>
        <input type='text' className='input-field' value={description} placeholder='Enter Description' onChange={(e)=> setDescription(e.target.value)}/>
        {
          error && !description && <span className='input-error'>Please enter valid description</span>
        }
      </div>
      <div className='input-wrapper'>
        <button className='button' onClick={handleUpdateFoodItem}>Update Food Item</button>
      </div>
      <div className='input-wrapper'>
        <button className='button' onClick={handleBack}>Back to Food Item List</button>
      </div>
    </div>
  )
}

export default EditFoodItem
