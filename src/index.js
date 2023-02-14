import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Inbox from "./Inbox";
import Mail from "./Mail";
import Sent from "./Sent";
import Starred from "./Starred";
import Spam from "./Spam";
import Compose from "./Compose";
import Submail from "./Submail";
import NewSubmail from "./NewSubmail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="compose" element={<Compose />}></Route>
          <Route path="inbox" element={<Inbox />} />
          <Route path="inbox/mail" element={<Mail />} />
          <Route path="sent" element={<Sent />} />
          <Route path="sent/mail" element={<Mail />} />
          <Route path="starred" element={<Starred />} />
          <Route path="starred/mail" element={<Mail />} />
          <Route path="spam" element={<Spam />} />
          <Route path="spam/mail" element={<Mail />} />
          <Route path="submail" element={<Submail />} />
          <Route path="submail/new" element={<NewSubmail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
