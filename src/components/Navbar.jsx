import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  const collapseRef = useRef(null);

  const closeMenu = () => {
    const collapseElement = collapseRef.current;
    if (collapseElement && collapseElement.classList.contains("show")) {
      const collapseInstance =
        window.bootstrap?.Collapse?.getInstance(collapseElement);
      if (collapseInstance) {
        collapseInstance.hide();
      } else {
        // Fallback: manually remove the "show" class if Bootstrap instance is not found
        collapseElement.classList.remove("show");
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/ImagesCompressed/logo.webp" alt="Logo" className="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          ref={collapseRef}
        >
          <ul className="navbar-nav me-auto mb-lg-0 ">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/epilepsy" onClick={closeMenu}>
                Awareness
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>
                About Us
              </Link>
            </li>
          </ul>
          {/* For the buttons */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/ContactUs"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
