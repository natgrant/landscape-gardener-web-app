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
              <a className="navbar-item">Projects</a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>
                <div className="navbar-dropdown">
                  <a className="navbar-item">About</a>
                  <Link to="/contact" className="navbar-item">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default MainNav;
