import Timeline from "./Components/Timeline";
import Navigation from "./Components/Navigation";
import "./App.css"; 
function App() {
    
  return (
    <>

      <div className="Main-contaner">
          <Navigation></Navigation>
        <div className="timeline">
          <Timeline></Timeline>
        </div>
      </div>
    </>
  );
}

export default App;
