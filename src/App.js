import { Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch,  } from "react-redux";
import "./App.css";
import Timeline from "./Components/Timeline";
import Navigation from "./Components/Navigation";
import Trends from "./Components/Trends";
import Search from "./Components/search";
import Profile from "./Components/Profile";
import { setTweets } from "./reducers/Tweets/action";

function App() {
  const userInfo=["Noura",1]
    localStorage.setItem("currentUser",JSON.stringify(userInfo))
  const dispatch = useDispatch();

  const tweets = [
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
      img: "",
      userPassword: "123456",
      userId: 2,
    },
    {
      username: "Noura",
      img: "",
      userPassword: "654321",
      userId: 1,
    },
    {
      username: "Fahad",
      img: "",
      userPassword: "654320",
      userId: 3,
    },
    {
      username: "Amal",
      img: "",
      userPassword: "653320",
      userId: 4,
    },
    {
      username: "Rema",
      img: "",
      userPassword: "553320",
      userId: 5,
    },
  ];

  const likes = {
    user_1: [1, 2],
    user_3: [1, 2, 3],
  };

  useEffect(() => {
    // Set tweets

    const action = setTweets(tweets);
    dispatch(action);
    // Set users
        
  }, []);

  return (
    <>
      <div className="Main-contaner">
        <div className="left-col">
          <Navigation></Navigation>
        </div>
        <div className="mid-col">
          <div>
            <BrowserRouter>
              <Route exact path="/" component={Timeline} />
              <Route path="/Profile" component={Profile} />
            </BrowserRouter>
          </div>
        </div>
        <div className="right-col">
          <Search></Search>
          <Trends></Trends>
        </div>
      </div>
    </>
  );
}

export default App;
