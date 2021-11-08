export const setLikes = (Likes) => {
  return { 
    type: "SET_LIKES", 
    payload: Likes,
  };
};

export const addLike = (tweetId) => {
  return { 
    type: "ADD_LIKE", 
    payload: tweetId,
  };
};
