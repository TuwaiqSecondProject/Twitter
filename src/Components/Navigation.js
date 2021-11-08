import home from "../images/home-svgrepo-com.svg";
import explorer from "../images/hashtag-svgrepo-com.svg";
import notification from "../images/notification-svgrepo-com.svg";
import message from "../images/message-svgrepo-com.svg";
import bookmark from "../images/bookmark-svgrepo-com.svg";
import list from "../images/list-svgrepo-com.svg";
import profile from "../images/profile-svgrepo-com.svg";
import logo from "../images/Logo blue.svg";

function Navigation() {
  return (
    <>
      <div>
        <div className="nav">
          <img class="logo" src={logo} />
          <ul>
            <li>
              <a>
                <img src={home} />
                Home
              </a>
            </li>

            <li>
              <a>
                <img src={explorer} />
                Explore
              </a>
            </li>
            <li>
              <a>
                <img src={notification} /> Notification
              </a>
            </li>
          </ul>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a>
                <img src={message} />
                Messages
              </a>
            </li>
            <li>
              <a>
                <img src={bookmark} />
                Bookmark
              </a>
            </li>
            <li>
              <a>
                <img src={list} />
                List
              </a>
            </li>
            <li>
              <a>
                <img src={profile} />
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navigation;
