import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../reducers/likes/action";
import { addNumberOfLikes } from "../reducers/Tweets/action";
import { decreaseNumberOfLikes } from "../reducers/Tweets/action";
import avatar from "../images/avatar.jpg";
import replay from "../images/arrow-svgrepo-com.svg";
import likes from "../images/like-svgrepo-com.svg";
import { useState} from "react";

function Tweet(UserId) {
  const dispatch = useDispatch();
  const[counter,setCounter]=useState(0);
  function addLikes(){
    const tweetId=UserId.tweetID;
    if(counter===0){
      setCounter(1);
    const action4 = addLike(tweetId);
    dispatch(action4);

    const action5 = addNumberOfLikes(tweetId);
    dispatch(action5);
    
  }
    else{
      setCounter(0)
      const action6 = decreaseNumberOfLikes(tweetId);
      dispatch(action6);
    }
    }
 
  


  const state = useSelector((state) => {
    return {
      tweets: state.tweetsReducer.tweets,
      user: state.usersReducer.Users,
      likes: state.likesReducer.likes,
    };
  });

  return (
    <>
      <div className="post-container">
        <div className="post">
          <div className="header">
            <div>
              <img src={avatar} />
            </div>
            <div>
              <p>@{UserId.username}</p>
            </div>
          </div>
          <div className="contetnt">
            <p>{UserId.Content}</p>
          </div>
          <div className="footer">
            <div>
              <button>
                <img src={replay} />
              </button>

              <button onClick={addLikes}>
                <img src={likes} />
              </button>{UserId.numberOfLikes}
              {/* <button> like</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tweet;
