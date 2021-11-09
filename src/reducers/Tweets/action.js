export const setTweets = (tweets) => {
  return { 
    types: "SET_TWEETS", 
    payload: tweets };
};

export const setSearche = (tweets) => {
  return { 
    type: "SET_SEARCH", 
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
export const addTweet = (tweetContent) => {
  return { 
    type: "ADD_TWEET", 
    payload: tweetContent };
};