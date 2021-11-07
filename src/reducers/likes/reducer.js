const initialState = {
  likes: [],
};
const likesReducer = (state = initialState, { type, paylaod }) => {
  switch (type) {
    case "SET_LIKES":
      return {
        likes: paylaod,
      };

    default:
      return state;
  }
};
export default likesReducer;
