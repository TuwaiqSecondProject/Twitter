import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tweet from "./Tweet";
import { addTweet } from "../reducers/Tweets/action";
import avatar from "../images/avatar.jpg";
import Upper from "./UpperBar";

function Timeline() {
  const state = useSelector((state) => {
    return {
      tweets: state.tweetsReducer.tweets,
      user: state.usersReducer.Users,
      likes: state.likesReducer.likes,
      searchRes: state.tweetsReducer.searchRes,
    };
  });
  const [tweetValue, setTweet] = useState("");
  const dispatch = useDispatch();

  function newTweetValue(e) {
    const newTweetValue = e.target.value;
    setTweet(newTweetValue);
  }

  function createTweet() {
    const action8 = addTweet(tweetValue);
    dispatch(action8);
  }

  // get avatar by localstorage id
  const currentUser = localStorage.getItem("currentUser");
  const currentUserId = JSON.parse(currentUser)[1];
  return (
    <>
      {state.user.map((element) => {
        console.log(currentUserId, element.userId);
        if (currentUserId == element.userId) {
          return <Upper home={"Home"} avatar={element.img} />;
        }
      })}

      <div className="timeline_with_no_border">
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
                onChange={newTweetValue}
              />
            </div>
            <div className="footer">
              <div>
                <button className="btn button1" onClick={createTweet}>
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
        {state.searchRes.map((element) => {
          let userIndex = 1;
          for (let index = 0; index < state.user.length; index++) {
            if (state.user[index].userId == element.UserId) {
              userIndex = index;
            }
          }
          return (
            <Tweet
              UserId={element.UserId}
              Content={element.Content}
              date={element.date}
              numberOfLikes={element.numberOfLikes}
              avatar={element.img}
              username={state.user[userIndex].username}
            />
          );
        })}

        {state.tweets.map((element) => {
          let userIndex = 1;
          for (let index = 0; index < state.user.length; index++) {
            if (state.user[index].userId == element.UserId) {
              userIndex = index;
            }
          }
          return (
            <Tweet
              UserId={element.UserId}
              Content={element.Content}
              date={element.date}
              numberOfLikes={element.numberOfLikes}
              username={state.user[userIndex].username}
              avatar={state.user[userIndex].img}
              tweetID={element.tweetID}
              tweetImg={element.tweetImg}
            />
          );
        })}
      </div>
    </>
  );
}
export default Timeline;
