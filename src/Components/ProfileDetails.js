import { useHistory } from "react-router";
import { BrowserRouter } from "react-router-dom";
import avatar1 from "../images/avatar.jpg";
import header1 from "../images/header.jfif";

const ProfileDetails = ({ username, avatar, header }) => {
  console.log(avatar, header);
  const history = useHistory();
  return (
    <>
      <div className="profile-container">
        <div className="profile-header">
          <img
            className="header-img"
            src={header}
            alt="require function fails"
          ></img>
          <img
            className="avatar-img"
            src={avatar}
            alt="require function fails"
          ></img>
        </div>
        <div className="profile-username">
          <p className="">@{username}</p>
          <p className="">what’s happening?!</p>
          <p className="">85 Following 453 Followers</p>
        </div>
        <div className="profile-footer">
          {/* <BrowserRouter>
            <Route></Route>
          </BrowserRouter> */}
          <button
            className="pagnaing"
            onClick={(e) => {
              history.push(`/Profile`);
            }}
          >
            Tweet
          </button>
          <button
            className="pagnaing"
            onClick={(e) => {
              history.push(`/Profile/with_replies`);
            }}
          >
            Tweets & replies
          </button>
          <button className="pagnaing">Media</button>
          <button className="pagnaing">Likes</button>
        </div>
      </div>
    </>
  );
};
export default ProfileDetails;
