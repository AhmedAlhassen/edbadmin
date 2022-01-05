import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./TopNav.css";
import notifactions from "../../assets/JsonData/notification.json";
import { Link } from "react-router-dom";

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here ..." />
        <i className="bx  bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown icon="bx bx-user" />
          {/* dropdown here  */}
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifactions}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
          {/* dropdown here  */}
        </div>
        <div className="topnav__right-item">
          <Dropdown />
          {/* dropdown here  */}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
