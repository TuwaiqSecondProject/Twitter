import { useSelector } from "react-redux";
import Tweet from "./Tweet";
import ProfileDetails from "./ProfileDetails";

function Profile() {
  const username = JSON.parse(localStorage.getItem("currentUser"));
  const state = useSelector((state) => {
    return {
      tweets: state.tweetsReducer.tweets,
      user: state.usersReducer.Users,
      likes: state.likesReducer.likes,
    };
  });
  return (
    <>
      <div className="timeline">
        {state.user.map((element) => {
          if (username[1] == element.userId) {
            console.log("TEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEST");
            console.log("pass");
            return (
              <ProfileDetails
                username={element.username}
                avatar={element.img}
                header={element.header}
              />
            );
          }
        })}

        {state.tweets.map((element) => {
          for (let index = 0; index < state.user.length; index++) {
            console.log(state.user[index].userId, element.UserId);
            if (username[1] == element.UserId) {
              return (
                <Tweet
                  UserId={element.UserId}
                  Content={element.Content}
                  date={element.date}
                  numberOfLikes={element.numberOfLikes}
                  tweetID={element.tweetID}
                  username={username[0]}
                  avatar={element.img}
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
