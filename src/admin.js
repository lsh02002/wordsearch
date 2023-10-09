//import ReactDOM from "react-dom/client";
//import reportWebVitals from "./reportWebVitals";
import Header from "./header";
import Main from "./main";

import "./admin.css";

function Admin() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default Admin;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
