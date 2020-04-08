import React, { Component } from "react";
import "./MainNavigation.scss";
import gsap from "gsap";

class MainNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    const tl = gsap.timeline();
    tl.fromTo(
      "#main-navigation",
      0.8,
      { maxHeight: 0 },
      { maxHeight: "100%", ease: "Power3.easeOut" }
    )
      .fromTo(
        "#main-navigation .underlay",
        0.6,
        { maxHeight: "0" },
        {
          maxHeight: "100%",
          ease: "Power2.easeInOut",
        },
        0.7
      )
      .to(
        "#main-navigation",
        0.4,
        {
          background: "rgb(88, 245, 148)",
          ease: "Power1.easeOut",
        },
        1.2
      )
      .fromTo(
        ".menu-label",
        0.4,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, ease: "Power1.easeOut" },
        1.3
      )
      .fromTo(
        ".menu-list li",
        0.4,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "Power3.easeInOut",
        },
        1.5
      );
  }

  render() {
    return (
      <>
        <section className="section" id="main-navigation">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <aside className="menu">
                  <h2 className="menu-label title is-1">Navigation</h2>
                  <ul className="menu-list">
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/">Portfolio</a>
                    </li>
                    <li>
                      <a href="/">Case Studies</a>
                    </li>
                    <li>
                      <a href="/">Gallery</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                  </ul>
                </aside>
              </div>{" "}
              {/* End Column*/}
            </div>
          </div>
          <div className="underlay"></div>
        </section>
      </>
    );
  }
}

export default MainNavigation;
