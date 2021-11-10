import { useSelector } from "react-redux";
import Tweet from "./Tweet";
function Likes(prop) {
  console.log(prop.likeId);
  const state = useSelector((state) => {
    return {
      tweets: state.tweetsReducer.tweets,
      user: state.usersReducer.Users,
      likes: state.likesReducer.likes,
    };
  });

  const a = state.tweets.filter((e) => {
    console.log(e.UserId, prop.likeId);
    if (e.UserId == prop.likeId) {
      return e;
    }
  });

  console.log(a);

  return (
    <>
      {a.map((element) => {
        console.log(element.Content);

        return (
          <Tweet
            UserId={element.UserId}
            Content={element.Content}
            date={element.date}
            numberOfLikes={element.numberOfLikes}
            tweetID={element.tweetID}
            // username={username[0]}
            avatar={element.img}
          />
        );
      })}
    </>
  );
}
export default Likes;
