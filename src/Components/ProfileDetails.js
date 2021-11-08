import avatar from "../images/avatar.jpg";
import header from "../images/header.jfif";

const ProfileDetails = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-header">
          <img className="header-img" src={header} />
          <img className="avatar-img" src={avatar} />
        </div>
        <div className="profile-username"></div>
        <div className="profile-footer"></div>
      </div>
    </>
  );
};
export default ProfileDetails;
