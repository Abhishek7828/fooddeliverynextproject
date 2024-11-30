import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const FoodItemList = () => {
  const router = useRouter();
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    // return
    fetchFoodItems();
  }, []);

  const fetchFoodItems = async () => {
    try {
      const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
      let resto_id = restaurantData._id;
      // console.log("sdsd",restaurantData);

      let response = await fetch(
        `http://localhost:3000/api/restaurant/foods/${resto_id}`
      );
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

  // Placeholder functions for edit and delete
  const deleteFoodItem = async (id) => {
    let response = await fetch(
      `http://localhost:3000/api/restaurant/foods/${id}`,
      {
        method: "delete",
      }
    );
    response = await response.json();
    if (response.success) {
      fetchFoodItems();
    } else {
      alert("Food Item not deleted successfully");
    }
    // console.log("Delete item with id:", id);
  };

  const handleEdit = (id) => {
    router.push(`http://localhost:3000/restaurent/dashboard/${id}`)
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
              {/* {console.log("item", item)} */}
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <img
                  src={item.img_path}
                  alt={item.name}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>
                <button onClick={() => deleteFoodItem(item._id)}>Delete</button>
                <button onClick={() => handleEdit(item._id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodItemList;
