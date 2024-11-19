import React from "react";
import Title from "../molecules/Title";
import './Header.css'
import SearchItem from "../atoms/SearchItem";
function Header() {
  return (
    <div className="row header-div">
      <div className="col-3">
        <Title />
      </div>
      <div className="col-5 align-content-center">
        <SearchItem />
      </div>
      <div className="col-4"></div>
    </div>
  );
}

export default Header;
