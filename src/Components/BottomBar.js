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
  const history = useHistory();
  return (
    <div class="navbar">
      <a
        onClick={() => {
          history.push(`/Timeline`);
        }}
      >
        <img src={home} />
      </a>
      <a>
        <img src={explorer} />
      </a>
      <a>
        <img src={notification} />
      </a>
      <a>
        <img src={message} />
      </a>
    </div>
  );
};
export default BottomBar;
