import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log("Burger King Id", resId);
  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex]=useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwo, cuisines } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(
    "itemCards",
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log("categories id",categories);

  if (itemCards === undefined) {
    return <Shimmer />;
  }

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines}-Rs{costForTwo}
      </p>
      {categories.map((category,index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
           showItems={index === showIndex?true:false}
           setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
