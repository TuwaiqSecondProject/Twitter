import { useHistory } from "react-router";
import home from "../images/home-svgrepo-com.svg";
import explorer from "../images/hashtag-svgrepo-com.svg";
import notification from "../images/notification-svgrepo-com.svg";
import message from "../images/message-svgrepo-com.svg";
import bookmark from "../images/bookmark-svgrepo-com.svg";
import list from "../images/list-svgrepo-com.svg";
import profile from "../images/profile-svgrepo-com.svg";
import logo from "../images/Logo blue.svg";

function Iconsbar() {
  const history = useHistory();
  return (
    <>
      <div className="Iconsbar-component">
        <div className="nav">
          <img class="logo" src={logo} />
          <ul>
            <li>
              <a
                onClick={() => {
                  history.push(`/Timeline`);
                }}
              >
                <img src={home} />
              </a>
            </li>

            <li>
              <a>
                <img src={explorer} />
              </a>
            </li>
            <li>
              <a>
                <img src={notification} />
              </a>
            </li>
          </ul>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a>
                <img src={message} />
              </a>
            </li>
            <li>
              <a>
                <img src={bookmark} />
              </a>
            </li>
            <li>
              <a>
                <img src={list} />
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  history.push(
                    `/Profile/${
                      JSON.parse(localStorage.getItem("currentUser"))[0]
                    }`
                  );
                }}
              >
                <img src={profile} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Iconsbar;
