import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="text-muted">© 2021 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <NavLink to="/">
              <FaInstagram className="text-muted" />
            </NavLink>
          </li>
          <li className="ms-3">
            <NavLink to="/">
              <FaTwitter className="text-muted" />
            </NavLink>
          </li>
          <li className="ms-3">
            <NavLink to="/">
              <FaFacebook className="text-muted" />
            </NavLink>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
