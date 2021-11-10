import Login from "./Components/Login";
import App from "./App";
import { Route } from "react-router-dom";
import Timeline from "./Components/Timeline";
import Profile from "./Components/Profile";
const Application = () => {
  return (
    <>
      <Route path="/App" component={App} />
      <Route exact path="/App/timeline" component={Timeline} />
      <Route path="App/profile" component={Profile} />
    </>
  );
};
export default Application;
