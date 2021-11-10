import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Timeline from "./Components/Timeline";
import Navigation from "./Components/Navigation";
import Trends from "./Components/Trends";
import Search from "./Components/search";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import BottomBar from "./Components/BottomBar";

import { setTweets } from "./reducers/Tweets/action";
import TweetDetails from "./Components/TweetDetails";
import Iconsbar from "./Components/Iconsbar";

function App() {
  return (
    <>
      <div className="Main-contaner">
        <div className="left-col">
          <div className="Navigation-component">
            <Navigation></Navigation>
          </div>
          <div className="Iconsbar-component">
            <Iconsbar></Iconsbar>
          </div>
        </div>
        <div className="mid-col">
          <div>
            <div className="timeline">
              <Route  path="/App/Timeline" component={Timeline} />
              <Route path="/App/Profile" component={Profile} />
              <Route exact path="/" component={Login} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/App/tweet/:id" component={TweetDetails} />
            </div>
           
          </div>
        </div>
        <div className="right-col">
          <Search></Search>
          <Trends></Trends>
        </div>
        <BottomBar></BottomBar>
      </div>
    </>
  );
}

export default App;
