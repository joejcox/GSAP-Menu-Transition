import React, { Component } from "react";
import "./App.css";
import MainNavigation from "./components/header/MainNavigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://use.fontawesome.com/releases/v5.3.1/js/all.js";
    script.async = true;
    document.body.appendChild(script);
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  render() {
    console.log(this.state.menuOpen);
    let burgerClasses;
    let menu;
    if (this.state.menuOpen) {
      burgerClasses = "navbar-burger is-active";
      menu = <MainNavigation open={true} />;
    } else {
      burgerClasses = "navbar-burger";
      menu = null;
    }
    return (
      <>
        <nav
          className="navbar-menu"
          role="navigation"
          aria-label="main navigation">
          <div className="navbar-start">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
                  width="112"
                  height="28"
                />
              </a>
            </div>
          </div>
          <div className="navbar-end">
            <button
              className={burgerClasses}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => this.toggleMenu()}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
        </nav>
        {menu}
      </>
    );
  }
}

export default App;
