import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../train.png";
import trainLogo from "../../train.png";
import { ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMobileMenu(s=>!s);
  };
  return (
    <header className={styles["app-header"]}>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <Link to="/">
            <img src={logo} className="navbar-brand" alt="brand"/>
          </Link>
          <button
            onClick={toggleMenu}
            className="navbar-toggler"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div
            className={`collapse navbar-collapse flex-grow-inherit ${openMobileMenu ? "show" : ""} `}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item mx-2">
                <Link
                  to="/"
                  className="nav-link header-link btn"
                  aria-current="page"
                >
                  Train Search
                </Link>
              </li> */}
              <li className="nav-item mx-2">
                <Link to="/" className="nav-link header-link btn">
                  PNR Status
                </Link>
              </li>
              {/* <li className="nav-item mx-2 dropdown">
                <Link
                  to="/"
                  className="nav-link header-link btn"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                  <ExpandMore />
                </Link>
              </li> */}
              <li className="nav-item mx-2 ">
                <a
                  href="#"
                  target="_blank"
                  className="nav-link header-link btn d-flex align-items-center"
                >
                  <img
                    src={trainLogo}
                    alt="app-icon"
                    width={30}
                    className="me-2"
                  />
                  Download App
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
