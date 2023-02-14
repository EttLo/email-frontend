import { Link, Outlet } from "react-router-dom";
import "./MailViewer.css";

function Starred() {
  return (
    <div className="Core">
      <nav className="Viewer">
        <p className="Title">STARRED</p>
        <p className="Mails">
          <Link to="/starred/mail" className="Mail">
            <p className="Contact">Cice Ballo</p>
            <p className="MailBody">Love ya</p>
          </Link>
          <p className="Contact" />
        </p>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default Starred;
