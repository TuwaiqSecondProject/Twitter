export const setLikes = (Like) => {
  const i=1;
console.log("in action :"+Like)
  return { 
    type: "SET_LIKES", 
    payload: Like,
  };
};
