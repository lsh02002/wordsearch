//import ReactDOM from "react-dom/client";
//import reportWebVitals from "./reportWebVitals";
import Header from "./header";
import Main from "./main";
import Game from "./game";

import "./admin.css";

function Admin() {
  return (
    <div class="admin-box">
      <div>
        <Header />
        <Main />
      </div>
      <div>
        <Game />
      </div>
    </div>
  );
}

export default Admin;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
