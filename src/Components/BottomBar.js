import { useHistory } from "react-router";
import home from "../images/home-svgrepo-com.svg";
import explorer from "../images/hashtag-svgrepo-com.svg";
import notification from "../images/notification-svgrepo-com.svg";
import message from "../images/message-svgrepo-com.svg";
import bookmark from "../images/bookmark-svgrepo-com.svg";
import list from "../images/list-svgrepo-com.svg";
import profile from "../images/profile-svgrepo-com.svg";
import logo from "../images/Logo blue.svg";

const BottomBar = () => {
  return (
    <div class="navbar">
      <a href="#home" class="active">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </div>
  );
};
export default BottomBar;
