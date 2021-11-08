const initialState = {
  Users: [
    {
      username: "Ahmed",
      img: "",
      userPassword: "123456",
      userId: 2
    },
    {
      username: "Noura",
      img: "",
      userPassword: "654321",
      userId: 1
    },
    {
      username: "Fahad",
      img: "",
      userPassword: "654320",
      userId: 3
    },
    {
      username: "Amal",
      img: "",
      userPassword: "653320",
      userId: 4
    },
    {
      username: "Rema",
      img: "",
      userPassword: "553320",
      userId: 5
    },
  ]
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
