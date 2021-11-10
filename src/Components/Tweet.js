import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../reducers/likes/action";
import { useState } from "react";
import { useHistory } from "react-router";
import { addNumberOfLikes } from "../reducers/Tweets/action";
import { deletTweet } from "../reducers/Tweets/action";
import { decreaseNumberOfLikes } from "../reducers/Tweets/action";
import avatar from "../images/avatar.jpg";
import replay from "../images/arrow-svgrepo-com.svg";
import likes from "../images/like-svgrepo-com.svg";
import delet from "../images/delete-button-svgrepo-com.svg";

function Tweet(UserId) {
  console.log(UserId.avatar);
  const userid = UserId.tweetID;
  const history = useHistory();
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);

  function addLikes() {
    const tweetId = UserId.tweetID;
    if (counter === 0) {
      setCounter(1);
      const action4 = addLike(tweetId);
      dispatch(action4);

      const action5 = addNumberOfLikes(tweetId);
      dispatch(action5);
    } else {
      setCounter(0);
      const action6 = decreaseNumberOfLikes(tweetId);
      dispatch(action6);
    }
  }

  function deletTweett() {
    const tweetId = UserId.tweetID;
    const action7 = deletTweet(tweetId);
    dispatch(action7);
  }

  const state = useSelector((state) => {
    return {
      tweets: state.tweetsReducer.tweets,
      user: state.usersReducer.Users,
      likes: state.likesReducer.likes,
    };
  });
  const currentUser = localStorage.getItem("currentUser");
  const currentUserId = JSON.parse(currentUser)[1];
  if (UserId.UserId == currentUserId) {
    return (
      <>
        <div className="post-container">
          <div className="post">
            <div className="header">
              <div>
                <img src={UserId.avatar} />
              </div>
              <div>
                <p>@{UserId.username}</p>
              </div>
            </div>
            <div
              className="contetnt"
              onClick={(e) => {
                history.push(`/tweet/${userid}`);
              }}
            >
              <p>{UserId.Content}</p>
            </div>
            <div className="footer">
              <div>
                <button>
                  <img src={replay} />
                </button>

                <button onClick={addLikes}>
                  <img src={likes} />
                </button>
                {UserId.numberOfLikes}
                {/* <button> like</button> */}
                <button style={{ marginLeft: "220px" }} onClick={deletTweett}>
                  <img src={delet} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="post-container">
          <div className="post">
            <div className="header">
              <div>
                <img src={UserId.avatar} />
              </div>
              <div>
                <p>@{UserId.username}</p>
              </div>
            </div>
            <div
              className="contetnt"
              onClick={(e) => {
                history.push(`/tweet/${userid}`);
              }}
            >
              <p>{UserId.Content}</p>

              {console.log(UserId.tweetImg)}
              {UserId.tweetImg != null ? (
                <div className="img-contetnt">
                  {UserId.tweetImg.map((e) => {
                    return <img src={e} />;
                  })}
                  {/* <img src={UserId.tweetImg} alt=" " /> */}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="footer">
              <div>
                <button>
                  <img src={replay} />
                </button>

                <button onClick={addLikes}>
                  <img src={likes} />
                </button>
                {UserId.numberOfLikes}
                {/* <button> like</button> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Tweet;
