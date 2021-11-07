import Timeline from "./Components/Timeline";
import Navigation from "./Components/Navigation";
import "./App.css";
import Trends from "./Components/Trends";
import Search from "./Components/search";
function App() {
  return (
    <>
      <div className="Main-contaner">
        <div className="left-col">
          <Navigation></Navigation>
        </div>
        <div className="timeline">
          <div className="mid-col">
            <Timeline></Timeline>
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
