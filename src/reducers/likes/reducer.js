const initialState = {
  likes: {
    user_1: [1, 2],
    user_3: [1, 2, 3],
  },
};

const likesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_LIKES":
      return {
        likes: payload,
      };

    case "ADD_LIKE":
      const currentUser = localStorage.getItem("currentUser");
      const currentUserId = JSON.parse(currentUser)[1];
      if (state.likes["user_" + currentUserId]) {
        const array = state.likes["user_" + currentUserId].slice();
        array.push(payload);
        state.likes["user_" + currentUserId] = array;
      } else {
        state.likes["user_" + currentUserId] = [payload];
      }
      return {
        likes: state.likes,
      };

    default:
      return state;
  }
};
export default likesReducer;
