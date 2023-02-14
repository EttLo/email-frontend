import { Link, Outlet } from "react-router-dom";
import "./MailViewer.css";

function Sent() {
  return (
    <div className="Core">
      <nav className="Viewer">
        <p className="Title">SENT</p>
        <p className="Mails">
          <Link to="/sent/mail" className="Mail">
            <p className="Contact">Ettore Lopes</p>
            <p className="MailBody">Hi how are you?</p>
          </Link>
          <Link to="/sent/mail" className="Mail">
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
export default Sent;
