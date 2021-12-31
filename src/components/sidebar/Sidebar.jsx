import React from "react";
import "./Sidebar.css";
import logo from "../../assets/images/logo.png";
import Sidebar_items from "../../assets/JsonData/sidebar_routes.json";
import { Link } from "react-router-dom";

const SidebarItem = ({ icon, active, title }) => {
  const act = active ? "active" : "";

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${act}`}>
        <i className={icon}></i>
        <span>{title}</span>
      </div>
    </div>
  );
};

function Sidebar({ location }) {
  const activeItem = Sidebar_items.findIndex(
    (item) => item.route === location.pathname
  );

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="EDB" />
      </div>
      {Sidebar_items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
          />
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
