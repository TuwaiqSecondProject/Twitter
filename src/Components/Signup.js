import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addUser } from "../reducers/Users/action";
function Signup() {
  const history = useHistory();
  const state = useSelector((state) => {
    console.log(state);
    return {
      user: state.usersReducer.Users,
    };
  });

  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userPassord, setUserPassword] = useState("");
  const [userPassord2, setUserPassword2] = useState("");

  function userNameValue(e) {
    let newUserName = e.target.value;
    setUserName(newUserName);
  }

  function userPasswordValue(e) {
    let newUserPassword = e.target.value;
    setUserPassword(newUserPassword);
  }

  function userPasswordValue2(e) {
    let newUserPassword = e.target.value;
    setUserPassword2(newUserPassword);
  }

  function regesterUser() {
    let flag = 1;
    for (let i = 0; i < state.user.length; i++) {
      if (userName == state.user[i].username) {
        alert("Sorry , user name is taken");
        flag = 0;
        return;
      }
    }
    if (flag) {
      if (userPassord == userPassord2) {
        alert("Welcome :" + userName + " you are logged in successfully ");
        adduser([userName, userPassord]);
        history.push(`/App`);
        return;
      } else {
        alert("Passwords do not match , please try agin");
        return;
      }
    }
  }

  function adduser() {
    const action11 = addUser([userName, userPassord]);
    dispatch(action11);
  }

  return (
    <div className="container">
      <div className="center">
        <div className="signup-containe">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <div className="margin-center">
            <label for="email">
              <p>Email</p>
            </label>
            <input
             className="login-input"
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />

            <label for="userName">
              <p>user name </p>
            </label>
            <input
             className="login-input"
              type="text"
              placeholder="Enter User Name "
              name="username"
              required
              onChange={userNameValue}
            />

            <label for="psw">
              <p>Password</p>
            </label>
            <input
             className="login-input"
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              onChange={userPasswordValue}
            />

            <label for="psw-repeat">
              <p>Repeat Password</p>
            </label>
            <input
             className="login-input"
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
              onChange={userPasswordValue2}
            />

            <label>
              <input type="checkbox" checked="checked" name="remember" />{" "}
              Remember me
            </label>

            <p>
              By creating an account you agree to our{" "}
              <a href="#">Terms & Privacy</a>.
            </p>

            <div>
              <button className="button1"  type="submit" onClick={regesterUser}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
