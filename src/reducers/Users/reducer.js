const initialState = {
  Users: [
    {
      username: "Ahmed",
      img: "",
      userPassword: "123456",
      userId: 2,
      img: "./images/avatar5.jpg",
      header: "./images/header6.jfif",
    },
    {
      username: "Noura",
      img: "",
      userPassword: "654321",
      userId: 1,
      img: "../images/avatar3.jpg",
      header: "../images/header2.jfif",
    },
    {
      username: "Fahad",
      img: "",
      userPassword: "654320",
      userId: 3,
      img: "../images/avatar6.jpg",
      header: "../images/header5.jfif",
    },
    {
      username: "Amal",
      img: "",
      userPassword: "653320",
      userId: 4,
      img: "../images/avatar2.jpg",
      header: "../images/header1.jfif",
    },
    {
      username: "Rema",
      img: "",
      userPassword: "553320",
      userId: 5,
      img: "../images/avatar4.jpg",
      header: "../images/header5.jfif",
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


// user: ibrahim 

// img: "./images/avatar7.jpg",
//       header: "./images/header6.jfif",


//       user: hammad

//       img: "./images/avatar8.jpg",
//       header: "./images/header7.jfif",

