export const setTweets = (tweets) => {
  return { 
    type: "SET_TWEETS", 
    payload: tweets };
};

export const addNumberOfLikes = (tweetId) => {
  return { 
    type: "ADD_NUMBER_OF_LIKES", 
    payload: tweetId };
};

export const decreaseNumberOfLikes = (tweetId) => {
  return { 
    type: "DECREASE_NUMBER_OF_LIKES", 
    payload: tweetId };
};

export const deletTweet = (tweetId) => {
  return { 
    type: "DELET_TWEET", 
    payload: tweetId };
};




