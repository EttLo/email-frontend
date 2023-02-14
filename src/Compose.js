import { useState } from "react";
import { Link } from "react-router-dom";
import "./Compose.css";
import { ReactSession } from "react-client-session";

function Compose() {
  const [recipient, setRecipient] = useState([]);
  const [cc, setCC] = useState([]);
  const [subject, setSubject] = useState([]);
  const [body, setBody] = useState([]);
  return (
    <div>
      <div className="Bar">
        <p className="BarText">
          <Link to="/" className="BarIcon">
            <i class="fi fi-rs-angle-left" />
          </Link>
        </p>
        <p className="BarText">
          <Link to="/sent" className="BarIcon">
            <i class="fi fi-rs-paper-plane"></i>
          </Link>
        </p>
      </div>
      <div className="ComposeMail">
        <p className="ComposeInputBox">
          <h3>To</h3>
          <input
            type="text"
            className="InputText"
            onChange={(event) => setRecipient(event.target.value)}
          ></input>
        </p>
        <p className="ComposeInputBox">
          <h3>CC</h3>
          <input
            type="text"
            className="InputText"
            onChange={(event) => setCC(event.target.value)}
          ></input>
        </p>
        <p className="ComposeInputBox">
          <h3>Subject</h3>
          <input
            type="text"
            className="InputText"
            onChange={(event) => setSubject(event.target.value)}
          ></input>
        </p>
        <p className="ComposeInputBox" id="composeBody">
          <h3>Body</h3>
          <div
            role="textbox"
            type="text"
            className="InputText"
            id="bodyText"
            contentEditable="true"
            aria-multiline="true"
            spellCheck="false"
            aria-owns=":vw"
            aria-controls=":vw"
            onChange={(event) => setBody(event.target.value)}
          ></div>
        </p>
      </div>
    </div>
  );
}

export default Compose;
