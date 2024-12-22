import React from "react";

const Header = ({ selectedItem, onSelect }) => {
  const headerItems = ["Home", "Posts"];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {headerItems.map((item) => (
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    selectedItem === item ? "active" : ""
                  }`}
                  aria-current="page"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelect(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <span className="navbar-text d-flex align-items-center">
            <i
              className="bi bi-envelope-fill me-2"
              style={{ color: "#0d6efd" }}
            ></i>
            <span className="text-muted" style={{ cursor: "not-allowed" }}>
              Alihassan01264@gmail.com
            </span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
