import React from "react";
import Title from "../molecules/Title";
import './Header.css'
import SearchItem from "../atoms/SearchItem";
import AuthButtons from "../molecules/AuthButtons";
function Header() {
  return (
    <div className="col">
        <div className="row header-div">
      <div className="col-3">
        <Title />
      </div>
      <div className="col-6 align-content-center">
        <SearchItem />
      </div>
      <div className="col-3  align-content-center">
        <AuthButtons/>
      </div>
    </div>
    </div>
    
  );
}

export default Header;
