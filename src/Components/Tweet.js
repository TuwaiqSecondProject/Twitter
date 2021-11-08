import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../reducers/likes/action";
import avatar from "../images/avatar.jpg";
import replay from "../images/arrow-svgrepo-com.svg";
import likes from "../images/like-svgrepo-com.svg";

function Tweet(UserId) {
  const dispatch = useDispatch();
  console.log("i am in tweet");
  console.log(UserId)

  function addLikes(){
    // userid=localStorage.getItem()
    const tweetId=UserId.tweetID;
    const action4 = addLike(tweetId);
    dispatch(action4);
 
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
              </button>
              {/* <button> like</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tweet;
