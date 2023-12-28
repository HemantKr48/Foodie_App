import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlinestatus = useOnline();
  //console.log("Body rendered",listOfRestaurants);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.557269&lng=88.302513&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log("jsondata", json);

    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  function filterTopRatedRestaurants() {
    setFilteredRestaurant(
      listOfRestaurants.filter((restaurant) => restaurant?.info?.avgRating >= 4)
    );
  }
  if (onlinestatus === false) {
    return <h2>Please check your internet Connection</h2>;
  }
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="md:my-10 my-56  ">
      <div className=" flex m-3">
        <div className="">
          <input
            className="border border-solid border-black rounded-md"
            placeholder="Search"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-3 py-1 m-2 bg-gray-300 rounded-md"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-3 py-1 m-2 bg-gray-300 rounded-md"
          onClick={() => {
            filterTopRatedRestaurants();
          }}
          type="button"
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1   gap-10 mx-10 ">
        {filteredRestaurant?.map((restaurant) => (
          <Link className="h-full"
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
