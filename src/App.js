import { Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
// import { useDispatch,  } from "react-redux";
import "./App.css";
import Timeline from "./Components/Timeline";
import Navigation from "./Components/Navigation";
import Trends from "./Components/Trends";
import Search from "./Components/search";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import Signup from "./Components/Signup";


function App() {

  return (
    <>
      <div className="Main-contaner">
        <div className="left-col">
          <Navigation></Navigation>
        </div>
        <div className="mid-col">
          <div>
           
              <Route exact path="/Timeline" component={Timeline} />
              <Route path="/Profile" component={Profile} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Signup" component={Signup} />
          
          </div>
        </div>
        <div className="right-col">
          <Search></Search>
          <Trends></Trends>
        </div>
      </div>
    </>
  );
}

export default App;
