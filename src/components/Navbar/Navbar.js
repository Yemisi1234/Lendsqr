import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

import {
  NOTIFICATION,
  PROFILE,
  SEARCH_ICON,
  LENDSQR_LOGO,
  DROPDOWN,
} from "../../assets/icons";

const Navbar = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src={LENDSQR_LOGO} alt="Logo" className="logo-img" />
          </Link>
        </div>
        <div className="search-box">
          <form action="submit" className="input-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search for anything"
            />
          </form>
        </div>
        <div className="user-nav">
          <Link className="nav-docs">Docs</Link>
          <img src={NOTIFICATION} alt="notification" />
          <div className="nav-user">
            <div className="user-img-container">
              <img src={PROFILE} alt="" className="user-img" />
            </div>
            <h3 className="user-name">Ayodeji</h3>
            <img src={DROPDOWN} alt="dropdown" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
