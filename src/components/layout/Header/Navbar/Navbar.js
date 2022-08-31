/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaBars } from "react-icons/fa";
import "./styles.css";

const links = [
  { id: 1, value: " ترست لاين" },
  { id: 2, value: "الية العمل" },
  { id: 3, value: "لماذا ترست لاين؟" },
  { id: 4, value: "تواصل معنا" },
];

function Navbar({ toggle }) {
  return (
    <nav className="nav">
      <div className="navbar-container">
        <div className="button-wrapper">
          <a href="#" className="language">
            ENG
          </a>
          <button className="button">دخول</button>
        </div>
        <div className="mobile-logo" onClick={toggle}>
          <FaBars />
        </div>
        <ul className="nav-menu">
          {links.map((item) => (
            <li className="nav-item" key={item.id}>
              <a href="#" className="nav-link">
                {item.value}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-logo">
          <img src="/images/logo.svg" alt="logo" className="logo" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
