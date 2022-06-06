import React, { useState } from "react";
import "./SideBar.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

function SideBar() {
  const [sidebar, setSidebar] = useState(true);

  function showSidebar() {
    setSidebar(!sidebar);
    console.log("momen");
  }

  // function close() {
  //     if(sidebar === true) {
  //         setSidebar(false);
  //     }
  //     console.log('momen')
  //  }
  // <img src={Admin} alt="" />

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar-admin">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>

      <nav
        className={sidebar ? "nav-menu active" : "nav-menu"}
        style={{ display: sidebar === true ? "block" : "none" }}
      >
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path} className="choices">
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        className="akwa"
        style={{ display: sidebar === false ? "block" : "none" }}
      >
        <div className="icon-flex">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className="icons">
                <Link to="/">{item.icon}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default SideBar;
