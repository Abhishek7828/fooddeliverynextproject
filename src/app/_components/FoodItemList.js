// import React, { useEffect, useState } from "react";

// const FoodItemList = () => {

//     const [foodItemsList, setFoodItem] = useState()
//     useEffect(()=> {
//         // const restorantId = JSON.parse(localStorage.getItem("restaurantUser")); 
//         // if(restorantId){
//         //     fetchFoodItems(restorantId)
//         // }
//         fetchFoodItems();
//     },[])

//     const fetchFoodItems =async() => {
        
//         let response = await fetch("http://localhost:3000/api/restaurant/foods/673b272427b28f5f3436c391")
//         response = await response.json()
//         if(response.success){
//             console.log("rps", response);
//             setFoodItem(response.result)
//         }else{
//             alert("Food Item List not Loading")
//         }
//     }
//   return (
//     <div>
//       <h1>Food Items</h1>
//         <thead>
//             <tr>
//             <td>S.No</td>
//             <td>Name</td>
//             <td>Price</td>
//             <td>Description</td>
//             <td>Image</td>
//             <td>Operations</td>
//             </tr>
//         </thead>
//         <tbody>
//             {foodItemsList.map((item, index)=> (
//                  <tr>
//                  <td>1{item}</td>
//                  <td>Pizza</td>
//                  <td>300</td>
//                  <td>Best Seller Pizza</td>
//                  <td>Image</td>
//                  <td>
//                      <button>Delete</button>
//                      <button>Edit</button>
//                  </td>
//              </tr>
//             ))}
//         </tbody>
//     </div>
//   );
// };

// export default FoodItemList;


import React, { useEffect, useState } from "react";

const FoodItemList = () => {
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
    let resto_id=restaurantData._id
    // console.log("sdsd",restaurantData);
    
    // return
    fetchFoodItems(resto_id);
  }, []);

  const fetchFoodItems = async (id) => {
    try {
      let response = await fetch(`http://localhost:3000/api/restaurant/foods/${id}`);
      response = await response.json();
      if (response.success) {
        console.log("Response:", response);
        setFoodItem(response.result);
      } else {
        alert("Failed to load food items.");
      }
    } catch (error) {
      console.error("Error fetching food items:", error);
      alert("An error occurred while loading food items.");
    }
  };

  return (
    <div>
      <h1>Food Items</h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {foodItem.map((item, index) => (
            <tr key={item.id || index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <img src={item.img_path} alt={item.name} style={{ width: "50px", height: "50px" }} />
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Placeholder functions for edit and delete
const handleDelete = (id) => {
  console.log("Delete item with id:", id);
};

const handleEdit = (id) => {
  console.log("Edit item with id:", id);
};

export default FoodItemList;
