import React from "react";
import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoad,
  faTicket,
  faTrain,
  faRotateLeft,
  faMapSigns,
  faAddressCard,
  faClock,
  faExchange,
  faTasks,
  faMoneyBill,
  faListAlt,
  faListOl,
  faArrows,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul className={styles["sidebar"]}>
      {/* <li>
        <Link to="/" className={styles["sidebar-li"]}>
          <FontAwesomeIcon icon={faTrain} className="me-2" />
          Home
        </Link>
      </li> */}
      <li>
        <Link to="/" className={styles["sidebar-li"]}>
          <FontAwesomeIcon icon={faTicket} className="me-2" />
          PNR Status
        </Link>
      </li>
      <li>
        <Link to="/404" className={styles["sidebar-li"]}>
          <FontAwesomeIcon icon={faRoad} className="me-2" />
          Train Running Status
        </Link>
      </li>
      <li>
        <Link to="/404" className={styles["sidebar-li"]}>
          <FontAwesomeIcon icon={faRotateLeft} className="me-2" />
          Train Running History
        </Link>
      </li>
      <li>
        <Link to="/404" className={styles["sidebar-li"]}>
          <FontAwesomeIcon icon={faMapSigns} className="me-2" />
          Platform Locator
        </Link>
      </li>
      <li>
        <Link to="/404" className={styles["sidebar-li"]}>
          <FontAwesomeIcon icon={faAddressCard} className="me-2" />
          Seat Availability
        </Link>
      </li>
      <li>
        <Link to="/404" className={styles["sidebar-li"]}>
          <FontAwesomeIcon icon={faClock} className="me-2" />
          Train Time Table
        </Link>
      </li>
      <li>
        <Link to="/404" className={styles["sidebar-li"]}>
          <FontAwesomeIcon icon={faExchange} className="me-2" />
          Trains Between Stations
        </Link>
      </li>
      <li>
        <Link to="/404" className={styles["sidebar-li"]}>
          <FontAwesomeIcon icon={faTasks} className="me-2" />
          All trains
        </Link>
      </li>
      <li>
        <Link to="/404" className={styles["sidebar-li"]}>
          <FontAwesomeIcon icon={faMoneyBill} className="me-2" />
          Fare Enquiry
        </Link>
      </li>
      <li>
        <Link to="/404" className={styles["sidebar-li"]}>
          <FontAwesomeIcon icon={faListAlt} className="me-2" />
          Seat Map
        </Link>
      </li>
      <li>
        <Link to="/404" className={styles["sidebar-li"]}>
          <FontAwesomeIcon icon={faListOl} className="me-2" />
          Coach Position
        </Link>
      </li>
      <li>
        <Link to="/404" className={styles["sidebar-li"]}>
          <FontAwesomeIcon icon={faArrows} className="me-2" />
          Stations Connected
        </Link>
      </li>
      <li>
        <Link to="/404" className={styles["sidebar-li"]}>
          <FontAwesomeIcon icon={faStar} className="me-2" />
          Imp Stations & Trains
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
