import "./App.css";
//import Body from "./components/Body";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useState,useEffect } from "react";


function App() {
  const [username,setUserName]=useState();
  useEffect(()=>{
    const data={
      name:"Hemant Kumar"
    }
    setUserName(data.name);
  })
  return (
    <UserContext.Provider value={{loggedInUser:username}}>
    <div className="App">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
}



export default App;
