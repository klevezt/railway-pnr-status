import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import award1 from "../../emerge-award.png";
import award2 from "../../pci-dss-compliant.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={`${styles.footer} `}>
      <div className="container-fluid inner-footer">
        <div className="row">
          <div className="col-12 col-md-6 ">
            <div className="d-flex align-items-center mb-3">
              <h2 className="me-3">Follow us on:</h2>
              <Link to="/">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="mx-2 p-2"
                  style={{
                    fontSize: 25,
                    color: "#4267B2",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    border: 0,
                  }}
                />
              </Link>
              <Link to="/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="mx-2 p-2"
                  style={{
                    fontSize: 25,
                    color: "#1DA1F2",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    border: 0,
                  }}
                />
              </Link>
            </div>
            <hr />
            <div className="row m-0">
              <ul className="list-group list-group-flush col-6">
                <Link to="/privacy-policy" className={styles["footer-link"]}>
                  Privacy Policy
                </Link>
                <Link to="/faq" className={styles["footer-link"]}>
                  FAQ
                </Link>
                <Link to="/contact-us" className={styles["footer-link"]}>
                  Contact
                </Link>
              </ul>
              <ul className="list-group list-group-flush col-6">
                <Link to="/privacy-policy" className={styles["footer-link"]}>
                  Terms And Conditions
                </Link>
                <Link to="/privacy-policy" className={styles["footer-link"]}>
                  Terms And Cancellations
                </Link>
                <Link to="/" target="_blank" className={styles["footer-link"]}>
                  Careers
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="d-flex align-items-center row">
              <img src={award1} alt="award1" className="col-12 col-sm-4" />
              <img
                src={award2}
                alt="award2"
                height={80}
                className="col-12 col-sm-3"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <ul className="d-inline list-group list-group-flush ">
              <a
                href="https://www.GetWebsites.net"
                target="_blank"
                className={styles["footer-link"]}
                rel="noreferrer"
              >
                GetWebsites.net
              </a>
              {/* <Link to="/" target="_blank" className={styles["footer-link"]}>
                abhibus
              </Link> */}
            </ul>
          </div>
        </div>
        <hr />
        <p className="m-0">
          IndianRailwaysInfo,com is for Travel Information Purpose only and will
          not be liable for any loss/damages due to the information it provides.
        </p>
        <p className="m-0">Copyright © 2022, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
