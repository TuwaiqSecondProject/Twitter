import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTweets } from "../reducers/Tweets/action";
import { setUsers } from "../reducers/Users/action";
import { setLikes } from "../reducers/likes/action";
import Tweet from "./Tweet";

function Timeline() {
  const dispatch = useDispatch();

  const Tweets = [
    {
      Content: "hello world",
      UserId: 1,
      tweetID: 1,
      date: "6/novmber",
      numberOfLikes: 5,
    },
    {
      Content: "BIG NEWS lol jk still Twitter",
      UserId: 2,
      tweetID: 2,
      date: "4/novmber",
      numberOfLikes: 4,
    },
    {
      Content:
        "We don’t beg for followers on twitter. You get em when you get em",
      UserId: 1,
      tweetID: 3,
      date: "2/novmber",
      numberOfLikes: 51,
    },
    {
      Content:
        "hello to everyone reading this while you should be doing something else",
      UserId: 2,
      tweetID: 4,
      date: "6/novmber",
      numberOfLikes: 2,
    },
    {
      Content: "𝐁𝐈𝐆 𝐁𝐄𝐍𝐙 ",
      img: "",
      UserId: 3,
      tweetID: 5,
      date: "1/novmber",
      numberOfLikes: 126485,
    },
    {
      Content:
        "I asked Angelina Jolie to sign on my arm for a tattoo and this is how it went ",
      UserId: 4,
      tweetID: 6,
      date: "30/oct",
      numberOfLikes: 8820,
    },
    {
      Content:
        "I love how Kit Harrington finished GoT and just came over to the MCU to play a more funny, charismatic, badass version of Jon Snow. #Eternals",
      UserId: 4,
      tweetID: 7,
      date: "19/oct",
      numberOfLikes: 4562,
    },
  ];

  const users = [
    { 
      username: "Ahmed",
      img:"",
      userPassword: "123456",
      userId: 2 },
    { 
      username: "Noura",
      img:"",
      userPassword: "654321",
      userId: 1 
    },
    { 
      username: "Fahad",
      img:"",
      userPassword: "654320",
      userId: 3 
    },
    { 
      username: "Amal",
      img:"",
      userPassword: "653320",
      userId: 4
    },
    { 
      username: "Rema",
      img:"",
      userPassword: "553320",
      userId: 5
    },
  ];

  const Likes=
[
  {
    1:[1,2],

  },
  {
    3:[1,2,3],

  },
  
]

  const i=1;
  console.log("Likes"+Likes)

  useEffect(() => {
    // Set tweets
    const action = setTweets(Tweets);
    dispatch(action);

    // Set users
    const action2 = setUsers(users);
    dispatch(action2);

    // Set Likes
    const action3 = setLikes(Likes);
    dispatch(action3);

  },[]);

  
  

  const state = useSelector((state) => {
    console.log(state)
    
    return {
      tweets: state.tweetsReducer.tweets,
      user:state.usersReducer.Users,
      likes:state.likesReducer.likes,
    }; 
  });



  return (
    <>
    
      {state.tweets.map((element) => {
        return (
          
          <Tweet
            UserId={element.UserId}
            Content={element.Content}
            date={element.date}
            numberOfLikes={element.numberOfLikes}
          />
        );
      })}
    </>
  );
}
export default Timeline;
