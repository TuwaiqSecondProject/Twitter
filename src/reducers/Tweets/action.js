export const setTweets = (tweets) => {
  return { 
    type: "SET_TWEETS", 
    payload: tweets };
};

export const setSearche = (tweets) => {
  return { 
    type: "SET_SEARCH", 
    payload: tweets };
};
