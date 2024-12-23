import React, { useContext } from "react";
import { UserContext } from "../Contexts";

const Header = ({ selectedItem, onSelect }) => {
  const headerItems = ["Users", "Posts"];
  const { selectedUser } = useContext(UserContext);

  return (
    <>
      {!selectedUser && selectedItem !== "Users" && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>No User Selected!</strong> Please select a user from the Users
          list to view their data.
        </div>
      )}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {headerItems.map((item) => (
                <li className="nav-item" key={item}>
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
