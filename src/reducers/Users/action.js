export const setUsers = (users) => {
  return { 
    type: "SET_USERS", 
    payload: users };
};

export const addUser = (userInfo) => {
  return { 
    type: "ADD_USER", 
    payload: userInfo };
};
