import React from "react";
import "./TopNav.css";

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here ..." />
        <i className="bx  bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">{/* dropdown here  */}</div>
        <div className="topnav__right-item">{/* dropdown here  */}</div>
        <div className="topnav__right-item">{/* theme settings  */}</div>
      </div>
    </div>
  );
};

export default TopNav;
