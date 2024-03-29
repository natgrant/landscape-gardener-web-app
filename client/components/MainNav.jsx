import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };
  }

  toggleMenu = () => {
    this.setState({ isToggle: !this.state.isToggle });
  };

  render() {
    let menuClassName = this.state.isToggle ? "is-active" : "is-closed";
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="/images/tree-icon.png" />
            </a>
            <a
              onClick={this.toggleMenu}
              role="button"
              className={`navbar-burger burger ${menuClassName}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbar" className={`navbar-menu ${menuClassName}`}>
            <div className="navbar-start">
              <a href="/" className="navbar-item">
                <strong>Home</strong>
              </a>
              <Link to="/projects" className="navbar-item">
                Projects
              </Link>
              <Link to="/about" className="navbar-item">
                About
              </Link>
              <Link to="/contact" className="navbar-item">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default MainNav;
