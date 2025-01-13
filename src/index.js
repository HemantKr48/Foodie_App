import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import { lazy } from "react";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

import Error from "./components/Error";

const Grocery=lazy(()=>import("./components/Grocery"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
      path: "/about",
      element: <About />,
    },
    {
       path:"/grocery",
       element:<Grocery/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    }
  ],
    errorElement:<Error/>
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
