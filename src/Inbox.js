import { Link } from "react-router-dom";
import "./MailViewer.css";

function Inbox() {
  return (
    <div className="Core">
      <nav className="Viewer">
        <p className="Title">INBOX</p>
        <p className="Mails">
          <Link to="/inbox/mail" className="Mail">
            <p className="Contact">Ettore Lopes</p>
            <p className="MailBody">Hi how are you?</p>
          </Link>
          <Link to="/inbox/mail" className="Mail">
            <p className="Contact">Cice Ballo</p>
            <p className="MailBody">Love ya</p>
          </Link>
          <p className="Contact" />
        </p>
      </nav>
    </div>
  );
}
export default Inbox;
