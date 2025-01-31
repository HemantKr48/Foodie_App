import ItemList from "./ItemList";
import { useState } from "react";


const RestaurantCategory = ({ data ,showItems,setShowIndex}) => {
  //console.log("categorydata", data);
// const [showItems,setShowItems]=useState(false);
const [open,setOpen]=useState(false);
const handleClick=()=>{
    setShowIndex();
    setOpen(!open);
}
  return (
    <div >
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 " >
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg ">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && open && < ItemList items={data.itemCards}/>} 
      </div>
      {/* Accordian Body */}
    </div>
  );
};
export default RestaurantCategory;
