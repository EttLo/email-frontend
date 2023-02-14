import { Link } from "react-router-dom";
import { useState } from "react";
import "./NewSubmail.css";

function NewSubmail() {
  const [suffix, setSuffix] = useState([]);
  return (
    <div>
      <div className="Bar">
        <p className="BarText">
          <Link to="/submail" className="BarIcon">
            <i class="fi fi-rs-angle-left" />
          </Link>
        </p>
        <p className="BarText">
          <Link to="/submail" className="BarIcon">
            <i class="fi fi-rs-check"></i>
          </Link>
        </p>
      </div>
      <div className="NewSubmail">
        <p className="NewSubmailInputBox">
          <h3 className="ParentMail">ettore.lopes_</h3>
          <input
            type="text"
            className="InputSubmail"
            onChange={(event) => setSuffix(event.target.value)}
          ></input>
        </p>
      </div>
    </div>
  );
}
export default NewSubmail;
