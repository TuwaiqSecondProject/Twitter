import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Tweet from "./Tweet";
const TweetDetails = () => {
  const { id } = useParams();
  const state = useSelector((state) => {
    return {
      tweets: state.tweetsReducer.tweets,
      user: state.usersReducer.Users,
      likes: state.likesReducer.likes,
      searchRes: state.tweetsReducer.searchRes,
    };
  });
  const tweet = state.tweets.filter((element) => {
    if (element.tweetID == id) {
      return element;
    }
  });
  let userIndex = 1;
  for (let index = 0; index < state.user.length; index++) {
    if (state.user[index].userId == tweet[0].UserId) {
      userIndex = index;
    }
  }

  return (
    <>
      <div className="timeline">
        <Tweet
          UserId={tweet[0].UserId}
          Content={tweet[0].Content}
          date={tweet[0].date}
          numberOfLikes={tweet[0].numberOfLikes}
          username={state.user[userIndex].username}
        />
        <h1>replies</h1>

        {tweet[0].replies.map((element) => {
          let userIndex = 1;
          for (let index = 0; index < state.user.length; index++) {
            console.log(state.user[index].userId, element.UserId);
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
      </div>
    </>
  );
};
export default TweetDetails;
