import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import "./Navbar.scss";

const Navbar = () => {
  const { logout, isLogin } = useContext(AuthContext);

  return (
    <nav>
      <div className="nav-wrapper navbar #9e9e9e grey">
        <a href="/" className="brand-logo">
          MERN todo App
        </a>
        {isLogin 
        ? <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/" onClick={logout}>Logout</a>
            </li>
          </ul>
        : <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        }
      </div>
    </nav>
  );
};

export default Navbar;
