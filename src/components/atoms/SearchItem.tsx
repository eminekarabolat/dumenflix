import React from "react";
import './SearchItem.css'
function SearchItem() {
  return (
      <div className="row search-bar align-items-center">
        <div className="col-1">
        <i className="fa-solid fa-magnifying-glass search-item"></i>
        </div>
        <div className="col-11">
        <input type="text" className="text-search" placeholder="Aramak istediğiniz filmin adını yazınız..." />
        </div>
      </div>
  );
}

export default SearchItem;
