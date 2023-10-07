//import logo from "./logo.svg";
import "./header.css";

function Header() {
  return (
    <div class="head-box">
      <div class="head-box-title">
        <h3>The Word Search</h3>
      </div>
      <div class="head-box-menu">
        <div class="head-box-word">
          <img src="pen.svg" alt="" />
          Word Search Maker
        </div>
        <div class="head-box-more">
          <img src="home.svg" alt="" />
          More Puzzles
        </div>
        <div class="head-box-search">
          <img src="search.svg" alt="" />
          Search
        </div>
      </div>
    </div>
  );
}

export default Header;
