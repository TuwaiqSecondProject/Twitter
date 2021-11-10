import { useSelector } from "react-redux";
import Tweet from "./Tweet";
import ProfileDetails from "./ProfileDetails";
import { Route } from "react-router";
import Likes from "./Likes";

function Profile() {
  let userIndex = 3;
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
        {state.likes[userId].map((element) => {
          console.log("pass");
          return (
            <Route exact path="/Profile/likes">
              <Likes likeId={element} />
            </Route>
          );
        })}
        {state.tweets.map((element) => {
          for (let index = 0; index < state.user.length; index++) {
            console.log(
              state.user[index].userId,
              element.UserId,
              "index",
              index
            );

            if (state.user[index].userId == element.UserId) {
              userIndex = index;
            }
            if (username[1] == element.UserId) {
              return (
                <>
                  {console.log(userIndex, state.user[userIndex].img)}
                  <Route exact path="/Profile">
                    <Tweet
                      UserId={element.UserId}
                      Content={element.Content}
                      date={element.date}
                      numberOfLikes={element.numberOfLikes}
                      tweetID={element.tweetID}
                      username={username[0]}
                      avatar={state.user[userIndex].img}
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
