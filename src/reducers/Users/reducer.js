const initialState = {
  Users: [
    {
      username: "Ahmed",
      userPassword: "123456",
      userId: 2,
      img: "../images/avatar5.jpg",
      header: "../images/header4.jfif",
    },
    {
      username: "Noura",
      userPassword: "654321",
      userId: 1,
      img: "../images/avatar3.jpg",
      header: "../cd images/header2.jfif",
    },
    {
      username: "Fahad",
      userPassword: "654320",
      userId: 3,
      img: "../images/avatar6.jpg",
      header: "../images/header5.jfif",
    },
    {
      username: "Amal",
      userPassword: "653320",
      userId: 4,
      img: "../images/avatar2.jpg",
      header: "../images/header1.jfif",
    },
    {
      username: "Rema",
      userPassword: "553320",
      userId: 5,
      img: "../images/avatar4.jpg",
      header: "../images/header5.jfif",
    },
    { 
      username: "Ibrahim",
      userPassword: "112233",
      userId: 6,
      img: "../images/avatar7.jpg",
      header: "../images/header6.jfif",
    },
    {
      username: "Hammad",
      userPassword: "121212",
      userId: 7,
      img: "../images/avatar8.jpg",
      header: "../images/header7.jfif",
    },
  ],
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




