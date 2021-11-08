import { useSelector } from "react-redux";
import avatar from "../images/avatar.jpg";
import Tweet from "./Tweet";
import ProfileDetails from "./ProfileDetails";

function Profile() {
  const username = JSON.parse(localStorage.getItem("currentUser"));
  console.log(username[0]);
  const state = useSelector((state) => {
    console.log(state);
    // console.log(state.tweetsReducer.tweets);
    // console.log(state.usersReducer.Users);
    return {
      tweets: state.tweetsReducer.tweets,
      user: state.usersReducer.Users,
      likes: state.likesReducer.likes,
    };
  });
  return (
    <>
      <div className="timeline">
        <div className="post-container">
          <ProfileDetails></ProfileDetails>
        
        </div>
        {state.tweets.map((element) => {
          let userIndex = 1;
          for (let index = 0; index < state.user.length; index++) {
            console.log(state.user[index].userId, element.UserId);
            if (username[1] == element.UserId) {
              return (
                <Tweet
                  UserId={element.UserId}
                  Content={element.Content}
                  date={element.date}
                  numberOfLikes={element.numberOfLikes}
                  username={username[0]}
                />
              );
            }
          }
        })}
      </div>
    </>
  );
}
export default Profile;
