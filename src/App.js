import "./App.css";
//import Body from "./components/Body";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [username, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Hemant Kumar",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username }}>
        <div className="App">
          <Header/>
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
