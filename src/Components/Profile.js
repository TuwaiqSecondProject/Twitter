import { useSelector } from "react-redux";
import Tweet from "./Tweet";
import ProfileDetails from "./ProfileDetails";
import { Route } from "react-router";
import Likes from "./Likes";

function Profile() {
  const currentUser = localStorage.getItem("currentUser");
  const currentUserId = JSON.parse(currentUser)[1];
  const username = JSON.parse(localStorage.getItem("currentUser"));
  const state = useSelector((state) => {
    return {
      tweets: state.tweetsReducer.tweets,
      user: state.usersReducer.Users,
      likes: state.likesReducer.likes,
    };
  });

  const userId = `user_${currentUserId}`;

  console.log(state.likes[userId]);
  return (
    <>
      <div className="timeline">
        {state.user.map((element) => {
          if (username[1] == element.userId) {
            return (
              <ProfileDetails
                username={element.username}
                avatar={element.img}
                header={element.header}
              />
            );
          }
        })}
        {state.likes[userId]?(
        state.likes[userId].map((element) => {
          console.log("pass");
          return (
            <Route exact path="/App/Profile/likes">
              <Likes likeId={element} />
            </Route>
          );
        })):("")
      
      }
        {state.tweets.map((element) => {
          for (let index = 0; index < state.user.length; index++) {
            if (username[1] == element.UserId) {
              return (
                <>
                  <Route exact path="/App/Profile/Tweet">
                    <Tweet
                      UserId={element.UserId}
                      Content={element.Content}
                      date={element.date}
                      numberOfLikes={element.numberOfLikes}
                      tweetID={element.tweetID}
                      username={username[0]}
                      avatar={element.img}
                    />
                  </Route>
                </>
              );
            }
          }
        })}
      </div>
    </>
  );
}
export default Profile;
