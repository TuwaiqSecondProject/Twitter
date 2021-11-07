const initialState = {
  tweets: [],
};

const tweetsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_TWEETS":
      return {
        tweets: payload,
      };

    case "REMOVE_VIDEO":
      return {
        tweets: [],
      };

    default:
      return state;
  }
};
export default tweetsReducer;
