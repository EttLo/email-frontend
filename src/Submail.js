import { Link } from "react-router-dom";
import "./Submail.css";
import { ReactSession } from "react-client-session";

function changeProfile(name) {
  ReactSession.set("username", name);
  console.log(ReactSession.get("username"));
}
function Submail() {
  let parent = ReactSession.get("parent");
  return (
    <div>
      <div className="Bar">
        <p className="BarText">
          <Link to="/" className="BarIcon">
            <i class="fi fi-rs-angle-left" />
          </Link>
        </p>
        <p className="BarText">
          <Link to="/submail/new" className="BarIcon">
            <i class="fi fi-rs-add"></i>
          </Link>
        </p>
      </div>
      <div className="Submails">
        <p>
          <Link
            to="/"
            className="Submail"
            onClick={() => changeProfile(parent)}
          >
            {parent}
          </Link>
        </p>
        <p>
          <Link
            to="/"
            className="Submail"
            onClick={() => changeProfile(parent.concat("_netflix"))}
          >
            {parent}_netflix
          </Link>
        </p>
        <p>
          <Link
            to="/"
            className="Submail"
            onClick={() => changeProfile(parent.concat("_university"))}
          >
            {parent}_university
          </Link>
        </p>
        <p>
          <Link
            to="/"
            className="Submail"
            onClick={() => changeProfile(parent.concat("_newsletters"))}
          >
            {parent}_newsletters
          </Link>
        </p>
        <p>
          <Link
            to="/"
            className="Submail"
            onClick={() => changeProfile(parent.concat("_amazon"))}
          >
            {parent}_amazon
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Submail;
