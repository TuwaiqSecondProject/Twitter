
import avatar from "../images/avatar.jpg";
import replay from "../images/arrow-svgrepo-com.svg";
import likes from "../images/like-svgrepo-com.svg";

function Tweet(UserId, Content, date, numberOfLikes) {



  return (
    <>
      <div className="post-container">
        <div className="post">
          <div className="header">
            <div>
              <img src={avatar} />
            </div>
            <div>
              <p>@twitter</p>
            </div>
          </div>
          <div className="contetnt">
            <p>{UserId.Content}</p>
          </div>
          <div className="footer">
            <div>
              <button>
                <img src={replay} />
              </button>

              <button >
                <img src={likes} />
              </button>
              {/* <button> like</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Tweet;
