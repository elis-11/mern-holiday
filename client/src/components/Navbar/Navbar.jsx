import React from 'react'

import './Navbar.scss'

const Navbar = () => {
    return (
        <nav>
        <div className="nav-wrapper navbar #9e9e9e grey">
          <a href="/" className="brand-logo">MERN todo App</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* <li><Link to="sass.html">Login</Link></li> */}
            <li><a href="/">Login</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
