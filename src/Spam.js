import { Link, Outlet } from "react-router-dom";
import "./MailViewer.css";

function Spam() {
  return (
    <div className="Core">
      <nav className="Viewer">
        <p className="Title">SPAM</p>
        <p className="Mails">
          <Link to="/spam/mail" className="Mail">
            <p className="Contact">Ettore Lopes</p>
            <p className="MailBody">Hi how are you?</p>
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
export default Spam;
