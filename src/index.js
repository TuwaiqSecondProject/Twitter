import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./reducers/store";
import Login from "./Components/Login";
import reportWebVitals from "./reportWebVitals";
import Profile from "./Components/Profile";
import Signup from "./Components/Signup";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/App" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
