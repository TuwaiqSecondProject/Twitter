import avatar1 from "../images/avatar.jpg";
import header1 from "../images/header.jfif";

const ProfileDetails = ({username,avatar,header, children}) => {
    console.log(avatar,header);
  return (
    <>
      <div className="profile-container">
        <div className="profile-header">
          <img className="header-img" src={header}  alt='require function fails'></img>
          <img className="avatar-img" src={avatar} alt='require function fails' ></img>
                    {children}

        </div>
        <div className="profile-username">
            <p>{username}</p>
        </div>
        <div className="profile-footer"></div>
      </div>
    </>
  );
};
export default ProfileDetails;
