const initialState = {
  tweets: [],
  searchRes: [],

};

const tweetsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_TWEETS":
      return {
        tweets: payload,
      };

    case "SET_SEARCH":
       return {
          tweets: state.tweets,
          searchRes: payload,
        };

    default:
      return state;
  }
};
export default tweetsReducer;

