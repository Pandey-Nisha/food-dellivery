import React from "react";
import "./Fooddisplay.css";
import { useContext } from "react";
import { Storecontext } from "../../Context/Storecontext";
import FoodItem from "../FoodItem/FoodItem";

const Fooddisplay = ({ category }) => {
  const { food_list } = useContext(Storecontext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (item.category === category || category === "null"){
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          
        })}
      </div>
    </div>
  );
};

export default Fooddisplay;
