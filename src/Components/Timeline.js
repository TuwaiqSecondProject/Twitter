import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tweet from "./Tweet";
import avatar from "../images/avatar.jpg";

function Timeline() {
  

  const state = useSelector((state) => {
    console.log(state);
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
          <div className="post">
            <div className="header">
              <div>
                <img src={avatar} />
              </div>
              <div>
                <p>@twitter</p>
              </div>
            </div>
            <div>
              <textarea
                className="tweet-input"
                placeholder="What's happening"
              />
            </div>
            <div className="footer">
              <div>
                <button className="btn button1">Tweet</button>
              </div>
            </div>
          </div>
        </div>
        {state.tweets.map((element) => {
          let userIndex = 1;
          for (let index = 0; index < state.user.length; index++) {
            console.log(state.user[index].userId, element.UserId);
            if (state.user[index].userId == element.UserId) {
              console.log("pass");
              userIndex = index;
              console.log(state.user[userIndex].username)
            }
          }
          return (
            
            <Tweet
              UserId={element.UserId}
              Content={element.Content}
              date={element.date}
              numberOfLikes={element.numberOfLikes}
              username={state.user[userIndex].username}
              tweetID={element.tweetID}

            />
          );
        })}
      </div>
    </>
  );
}
export default Timeline;
