const initialState = {
  tweets: [
    {
      Content: "hello world",
      UserId: 1,
      tweetID: 1,
      date: "6/novmber",
      numberOfLikes: 5,
      replies: ["a", "b", "c"],
    },
    {
      Content: "BIG NEWS lol jk still Twitter",
      UserId: 2,
      tweetID: 2,
      date: "4/novmber",
      numberOfLikes: 4,
      replies: ["a", "b", "c"],
    },
    {
      Content:
        "We don’t beg for followers on twitter. You get em when you get em",
      UserId: 1,
      tweetID: 3,
      date: "2/novmber",
      numberOfLikes: 51,
      replies: ["a", "b", "c"],
    },
    {
      Content:
        "hello to everyone reading this while you should be doing something else",
      UserId: 2,
      tweetID: 4,
      date: "6/novmber",
      numberOfLikes: 2,
      replies: ["a", "b", "c"],
    },
    {
      Content: "𝐁𝐈𝐆 𝐁𝐄𝐍𝐙 ",
      img: "",
      UserId: 3,
      tweetID: 5,
      date: "1/novmber",
      numberOfLikes: 126485,
      replies: ["a", "b", "c"],
    },
    {
      Content:
        "I asked Angelina Jolie to sign on my arm for a tattoo and this is how it went ",
      UserId: 4,
      tweetID: 6,
      date: "30/oct",
      numberOfLikes: 8820,
      replies: ["a", "b", "c"],
    },
    {
      Content:
        "I love how Kit Harrington finished GoT and just came over to the MCU to play a more funny, charismatic, badass version of Jon Snow. #Eternals",
      UserId: 4,
      tweetID: 7,
      date: "19/oct",
      numberOfLikes: 4562,
      replies: ["a", "b", "c"],
    },
  ],
};

const tweetsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_TWEETS":
      return {
        tweets: payload,
      };

    case "ADD_NUMBER_OF_LIKES":
      for (let i = 0; i < state.tweets.length; i++) {
        if (state.tweets[i].tweetID === payload) {
          state.tweets[i].numberOfLikes = state.tweets[i].numberOfLikes + 1;
        }
      }
      return {
        tweets: state.tweets,
      };

    case "DECREASE_NUMBER_OF_LIKES":
      for (let i = 0; i < state.tweets.length; i++) {
        if (state.tweets[i].tweetID === payload) {
          state.tweets[i].numberOfLikes = state.tweets[i].numberOfLikes - 1;
        }
      }
      return {
        tweets: state.tweets,
      };

    case "DELET_TWEET":
      return {
        tweets: state.tweets.filter((element) => {
          return element.tweetID !== payload;
        }),
      };

    case "ADD_REPLAY_TO_TWEET":
      return {
        tweets: state.tweets.filter((element) => {
          return element.tweetID !== payload;
        }),
      };
    default:
      return state;
  }
};
export default tweetsReducer;
