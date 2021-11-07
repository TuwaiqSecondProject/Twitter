const initialState = {
  likes: {},
};
const likesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_LIKES":
      return {
        likes: payload,
      };

    default:
      return state;
  }
};
export default likesReducer;
