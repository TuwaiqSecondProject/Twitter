const initialState = {
  likes: [],
};
const likesReducer = (state = initialState, { type, paylaod }) => {
  switch (type) {
    case "Add_TWEET_TO_LIKES":
      return {
        likes: state.likes.push(paylaod),
      };

    default:
      return state;
  }
};
export default likesReducer;
