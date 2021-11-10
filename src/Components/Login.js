import { useState} from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

function Login()
{
  const history = useHistory();
  const state = useSelector((state) => {
    return {
      user: state.usersReducer.Users,
    };
  });
  console.log(state.user)

  const [userName, setUserName] = useState("");
  const [userPassord, setUserPassword] = useState("");

  function userNameValue(e){
    let newUserName=e.target.value;
    setUserName(newUserName)
  }

  function userPasswordValue(e){
    let newUserPassword=e.target.value;
    setUserPassword(newUserPassword)
  }

  function Currentuser(){
    for(let i=0;i<state.user.length;i++){
      if(userName==state.user[i].username){
        if(userPassord==state.user[i].userPassword){
          const userInfo=[state.user[i].username,state.user[i].userId]
          localStorage.setItem("currentUser",JSON.stringify(userInfo))
          alert(" Welcome "+state.user[i].username)
          history.push(`/App`)
          return;
        }else{
          alert("The password is incorrect")
          return ;
        }
      }

    }
  
      alert("The user name : "+userName+" does not exist, please register first ")
    
  }


  return (
<div>
        <div>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" onChange={userNameValue} name="uname" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" onChange={userPasswordValue} name="psw" required/>
                
            <button type="submit" onClick={Currentuser}>Login</button>
            
            <label>
            <input type="checkbox" checked="checked" name="remember"/> Remember me
            </label>
        </div>

        <div>
            <button type="button" class="cancelbtn">Cancel</button>
            <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
</div>

  )

  
}

export default Login;