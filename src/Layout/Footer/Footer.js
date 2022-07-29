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
            </div>
            <hr />
            <div className="row m-0">
              <ul className="list-group list-group-flush col-6">
                <Link to="/" target="_blank" className={styles["footer-link"]}>
                  ConfirmTkt Buzz
                </Link>
                <Link to="/" target="_blank" className={styles["footer-link"]}>
                  FAQ
                </Link>
                <Link to="/" target="_blank" className={styles["footer-link"]}>
                  Contact
                </Link>
                <Link to="/" target="_blank" className={styles["footer-link"]}>
                  Media Kit
                </Link>
                <Link to="/" target="_blank" className={styles["footer-link"]}>
                  Aliances
                </Link>
              </ul>
              <ul className="list-group list-group-flush col-6">
                <Link to="/" target="_blank" className={styles["footer-link"]}>
                  Become an Affiliate
                </Link>
                <Link to="/" target="_blank" className={styles["footer-link"]}>
                  Terms And Condition
                </Link>
                <Link to="/" target="_blank" className={styles["footer-link"]}>
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
              <Link to="/" target="_blank" className={styles["footer-link"]}>
                ixigo
              </Link>
              <Link to="/" target="_blank" className={styles["footer-link"]}>
                abhibus
              </Link>
            </ul>
          </div>
        </div>
        <hr />
        <p className="m-0">
          ConfirmTkt.com is official partner of IRCTC to book IRCTC train
          tickets and Railway train enquiry
        </p>
        <p>© 2022 Confirmtkt</p>
      </div>
    </footer>
  );
};

export default Footer;
