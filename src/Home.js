import { Link, Outlet } from "react-router-dom";
import { ReactSession } from "react-client-session";
import "./Home.css";

function darkTheme() {
  let element = document.getElementById("Everything");
  element.classList.toggle("DarkMode");
}

ReactSession.setStoreType("localStorage");
ReactSession.set("parent", "ettore.lopes");
ReactSession.set("username", "ettore.lopes");

function Home() {
  return (
    <div className="Everything" id="Everything">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-regular-straight/css/uicons-regular-straight.css"
        />
      </head>
      <nav className="NavBar">
        <h1 className="NavItem">{ReactSession.get("username")}</h1>
        <div className="NavItem">
          <input
            type="checkbox"
            class="NavItem"
            id="switch"
            onClick={darkTheme}
          />
          <label for="switch" class="NavItem" id="toggle">
            theme
          </label>
        </div>
      </nav>
      <div className="body">
        <nav className="LeftMenu">
          <div>
            <p className="MenuItem">
              <Link to="/compose" className="MenuItem" id="compose">
                Compose
              </Link>
            </p>
            <p className="MenuItem">
              <Link to="/inbox" className="MenuItem">
                Inbox
              </Link>
            </p>
            <p className="MenuItem">
              <Link to="/sent" className="MenuItem">
                Sent
              </Link>
            </p>
            <p className="MenuItem">
              <Link to="/starred" className="MenuItem">
                Starred
              </Link>
            </p>
            <p className="MenuItem">
              <Link to="/spam" className="MenuItem">
                Spam
              </Link>
            </p>
            <p className="MenuItem">
              <Link to="/submail" className="MenuItem" id="subMail">
                Submails
              </Link>
            </p>
          </div>
          <div>
            <p className="MenuIcon">
              <i class="fi fi-rs-pencil"></i>
            </p>
            <p className="MenuIcon">
              <i class="fi fi-rs-envelope"></i>
            </p>
            <p className="MenuIcon">
              <i class="fi fi-rs-paper-plane"></i>
            </p>
            <p className="MenuIcon">
              <i class="fi fi-rs-star"></i>
            </p>
            <p className="MenuIcon">
              <i class="fi fi-rs-comment-exclamation"></i>
            </p>
            <p className="MenuIcon">
              <i class="fi fi-rs-chart-tree"></i>
            </p>
          </div>
        </nav>
        <div className="Home">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Home;
