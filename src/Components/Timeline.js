import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tweet from "./Tweet";
import { addTweet } from "../reducers/Tweets/action";
import avatar from "../images/avatar.jpg";

function Timeline() {
  // Test
  const userInfo = ["Noura", 1];
  localStorage.setItem("currentUser", JSON.stringify(userInfo));

// 
  const state = useSelector((state) => {
    return {
      tweets: state.tweetsReducer.tweets,
      user: state.usersReducer.Users,
      likes: state.likesReducer.likes,
      searchRes: state.tweetsReducer.searchRes,
    };
  });
  const [tweetValue,setTweet]=useState("")
  const dispatch = useDispatch();
  
  function newTweetValue(e){
    const newTweetValue=e.target.value;
    setTweet(newTweetValue)
  }

  function createTweet(){
    const action8=addTweet(tweetValue)
    dispatch(action8)
  }
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
                onChange={newTweetValue}
              />
            </div>
            <div className="footer">
              <div>
                <button className="btn button1" onClick={createTweet}>Tweet</button>
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
              tweetID={element.tweetID}
            />
          );
        })}
      </div>
    </>
  );
}
export default Timeline;
