const initialState = {
  Users: [],
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_USERS":
      return {
        Users: payload,
      };

    default:
      return state;
  }
};
export default usersReducer;
