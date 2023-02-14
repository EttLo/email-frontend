import "./Mail.css";
function back() {
  window.history.back();
}
function Mail() {
  return (
    <div>
      <div className="Bar">
        <p className="BarText">
          <button onClick={back} className="BackButton">
            <i class="fi fi-rs-angle-left" />
          </button>
        </p>
      </div>
      <div className="OpenMail">
        <p className="MailText">
          <h1>Hi how are you?</h1>
          <h3>from: Ettore Lopes</h3>
          <p>
            Hey how are you?
            <br />
            kind regards,
            <br />
            EL
          </p>
        </p>
      </div>
    </div>
  );
}
export default Mail;
