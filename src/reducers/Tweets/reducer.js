const initialState = {
  searchRes: [],

  tweets: [
    {
      Content: "hello world",
      UserId: 1,
      tweetID: 1,
      date: "6/novmber",
      numberOfLikes: 5,
      replies: [
        { UserId: 4, Content: "Nice", date: "30/oct", numberOfLikes: 2 },
        { UserId: 2, Content: "wow", date: "30/oct", numberOfLikes: 1 },
        { UserId: 3, Content: "good", date: "30/oct", numberOfLikes: 0 },
      ],
      tweetImg: [
        "/images/helloworld.png",
      ],
    },
    {
      Content: "BIG NEWS lol jk still Twitter",
      UserId: 2,
      tweetID: 2,
      date: "4/novmber",
      numberOfLikes: 4,
      tweetImg: [
        "/images/avatar10.jpg",
        "/images/avatar10.jpg",
        "/images/avatar10.jpg",
      ],
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
      UserId: 3,
      tweetID: 5,
      date: "1/novmber",
      numberOfLikes: 126485,
      tweetImg: ["/images/avatar12.jpg"],
      replies: ["a", "b", "c"],
    },
    {
      Content:
        "I asked Angelina Jolie to sign on my arm for a tattoo and this is how it went ",
      UserId: 4,
      tweetID: 6,
      date: "30/oct",
      numberOfLikes: 8820,
      tweetImg: ["/images/avatar11.jpg", "/images/FC-OrLiXIAs0Qtv.jfif"],
      replies: [
        { UserId: 1, Content: "Nice", date: "30/oct", numberOfLikes: 2 },
        { UserId: 2, Content: "wow", date: "30/oct", numberOfLikes: 1 },
        { UserId: 3, Content: "good", date: "30/oct", numberOfLikes: 0 },
      ],
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
    {
      Content: "Don’t call it dream, call it a plan",
      UserId: 5,
      tweetID: 8,
      date: "10/oct",
      numberOfLikes: 13,
    },
    {
      Content: "Happy nice weekend ",
      UserId: 1,
      tweetID: 9,
      date: "14/mar",
      numberOfLikes: 765,
    },
    {
      Content: "My life is my message.",
      UserId: 2,
      tweetID: 10,
      date: "7/feb",
      numberOfLikes: 66,
    },
    {
      Content: "Yesterday you said tomorrow. Just do it",
      UserId: 2,
      tweetID: 11,
      date: "23/jan",
      numberOfLikes: 5,
    },
    {
      Content: "Change the world by being yourself",
      UserId: 7,
      tweetID: 12,
      date: "10/may",
      numberOfLikes: 89,
    },
    {
      Content: "Die with memories, not dreams",
      UserId: 3,
      tweetID: 13,
      date: "1/oct",
      numberOfLikes: 1234,
      tweetImg: [
        "/images/cf98a360a94fed282e018d45dd380606.jpg",
      ],
    },
    {
      Content: "Be so good they can’t ignore you",
      UserId: 3,
      tweetID: 14,
      date: "3/jun",
      numberOfLikes: 654,
    },
    {
      Content: "Silence is an answer too",
      UserId: 4,
      tweetID: 15,
      date: "17/aug",
      numberOfLikes: 87,
    },
    {
      Content: "No pain No gain",
      UserId: 4,
      tweetID: 16,
      date: "18/aug",
      numberOfLikes: 334,
      tweetImg: [
        "/images/img354.jpg",
        "/images/img123.jpg",
      ],
    },
    {
      Content: "Take the risk or lose the chance",
      UserId: 5,
      tweetID: 17,
      date: "5/jul",
      numberOfLikes: 55,
    },
    {
      Content: "No pressure, no diamonds",
      UserId: 6,
      tweetID: 18,
      date: "13/dec",
      numberOfLikes: 98,
    },
    {
      Content: "What we think, we become",
      UserId: 6,
      tweetID: 19,
      date: "8/dec",
      numberOfLikes: 87,
    },
    {
      Content: "Once you choose hope, anything’s possible",
      UserId: 7,
      tweetID: 20,
      date: "1/jan",
      numberOfLikes: 100,
    },
    {
      Content: "Do not waste your time",
      UserId: 7,
      tweetID: 21,
      date: "20/sep",
      numberOfLikes: 6743,
    },
  ],
};

const tweetsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_TWEETS":
      return {
        tweets: payload,
      };

    case "SET_SEARCH":
      return {
        tweets: state.tweets,
        searchRes: payload,
      };

    case "ADD_NUMBER_OF_LIKES":
      for (let i = 0; i < state.tweets.length; i++) {
        if (state.tweets[i].tweetID === payload) {
          state.tweets[i].numberOfLikes = state.tweets[i].numberOfLikes + 1;
        }
      }
      return {
        tweets: state.tweets,
        searchRes: state.searchRes,
      };

    case "DECREASE_NUMBER_OF_LIKES":
      for (let i = 0; i < state.tweets.length; i++) {
        if (state.tweets[i].tweetID === payload) {
          state.tweets[i].numberOfLikes = state.tweets[i].numberOfLikes - 1;
        }
      }
      return {
        tweets: state.tweets,
        searchRes: state.searchRes,
      };

    case "DELET_TWEET":
      return {
        tweets: state.tweets.filter((element) => {
          return element.tweetID !== payload;
        }),
        searchRes: state.searchRes,
      };

    case "ADD_REPLAY_TO_TWEET":
      return {
        tweets: state.tweets.filter((element) => {
          return element.tweetID !== payload;
        }),
        searchRes: state.searchRes,
      };

    case "ADD_TWEET":
      const currentUser = localStorage.getItem("currentUser");
      const currentUserId = JSON.parse(currentUser)[1];
      const newTweet = {
        Content: payload,
        UserId: currentUserId,
        tweetID: ++state.tweets[state.tweets.length - 1].tweetID,
        date: "30/oct",
        numberOfLikes: 0,
        replies: [],
      };
      const array = state.tweets.slice();
      array.unshift(newTweet);

      return {
        tweets: array,
        searchRes: state.searchRes,
      };
    default:
      return state;
  }
};
export default tweetsReducer;
