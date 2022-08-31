/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { FaTimes } from "react-icons/fa";
import "./styles.css";
const links = [
  { id: 1, value: " ترست لاين" },
  { id: 2, value: "الية العمل" },
  { id: 3, value: "لماذا ترست لاين؟" },
  { id: 4, value: "تواصل معنا" },
];

function Sidebar({ isOpen, toggle }) {
  return (
    <aside
      className="sidebar-container"
      style={{ opacity: isOpen ? "100%" : "0", top: isOpen ? "0" : "-100%" }}
    >
      <div className="close-icon" onClick={toggle}>
        <FaTimes />
      </div>
      <div className="sidebar-wrapper">
        <ul className="sidebar-menu">
          {links.map((item) => (
            <a key={item.id} className="sidebar-link" href="#" onClick={toggle}>
              {item.value}
            </a>
          ))}
          <div className="wrapper">
            <a href="#" className="language">
              ENG
            </a>
            <button className="button">دخول</button>
          </div>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
