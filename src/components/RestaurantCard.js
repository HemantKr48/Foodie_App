import { IMG_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="w-48   h-80 shadow-md rounded-md m-2 p-4 bg-slate-200">
      <img
        className="border rounded-md"
        alt="res-logo"
        src={IMG_URL + cloudinaryImageId}
      />
      <div className="p-2">
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
      <div>
        <label className="text-white rounded-sm bg-black absolute">Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
