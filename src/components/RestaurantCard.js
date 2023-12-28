import { IMG_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="h-full w-full shadow-md rounded-md m-2  bg-slate-200	 ">
      <img
        className="border rounded-t-md"
        alt="res-logo"
        src={IMG_URL + cloudinaryImageId}
      />
      <div className="p-4">
        <h3 className=" font-bold">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="h-full">
        <label className="text-white  bg-red-600 px-2 rounded-md absolute">Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
