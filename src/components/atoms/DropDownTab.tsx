import React from "react";

interface IDropDownProps{
    text: string
}
function DropDownTab(props: IDropDownProps) {
    const {text} = props;
  return (
    <div className="dropdown dumen-header-tab">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown button
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
  );
}

export default DropDownTab;
