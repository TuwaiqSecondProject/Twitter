import { useState} from "react";
import { useSelector } from "react-redux";
function Signup(){

  const state = useSelector((state) => {
    console.log(state)
    return {
      user: state.usersReducer.Users,
    };
  });

  
  const [userName, setUserName] = useState("");
  const [userPassord, setUserPassword] = useState("");
  const [userPassord2, setUserPassword2] = useState("");

  function userNameValue(e){
    let newUserName=e.target.value;
    setUserName(newUserName)
  }

  function userPasswordValue(e){
    let newUserPassword=e.target.value;
    setUserPassword(newUserPassword)
  }

  function userPasswordValue2(e){
    let newUserPassword=e.target.value;
    setUserPassword2(newUserPassword)
  }

  function regesterUser(){
    let flag=1;
    for(let i=0;i<state.user.length;i++){
      if(userName==state.user[i].username){
        alert("Sorry , user name is taken")
        flag=0;
        return;

      }}
      if(flag){
        if(userPassord==userPassord2){
              alert("Welcome :"+userName +" you are logged in successfully ")
              return;
            }else{
              alert("Passwords do not match , please try agin")
              return;
            }
      }

    }


  
  return (


<div>
<div>
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

    <label for="userName"><b>user name </b></label>
    <input type="text" placeholder="Enter User Name " name="username" required  onChange={userNameValue} />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required  onChange={userPasswordValue}/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required   onChange={userPasswordValue2} />
    
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
    
    <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>

    <div>
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn" onClick={regesterUser}>Sign Up</button>
    </div>
  </div>
  
</div>

  )

  
}

export default Signup;
 


