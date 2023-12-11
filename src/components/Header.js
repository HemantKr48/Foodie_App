import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [loginbtn, setLoginBtn] = useState("Login");
  const onlinestatus = useOnline();
  const { loggedInUser } = useContext(UserContext);
  //Subscribing to the store using a variable
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between   bg-gray-300 shadow-lg m-2  ">
      <img className="w-40" alt="logo" src={LOGO_URL} />
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-2">OnlineStatus:{onlinestatus ? "🟢" : "🔴"}</li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="contact">Contact Us</Link>
          </li>
          <button
            className="px-2"
            onClick={() => {
              loginbtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginbtn}
          </button>
          <li className="px-4 font-bold">Cart - ({cartItems.length} items)</li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
