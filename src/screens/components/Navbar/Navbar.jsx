import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import {
  getUrlComponent,
  updatePathnames,
} from "../../../tools/navigation.tools";

import "./navbar.styles.css";
export default function Navbar(props) {
  const { showNavbar, onShowNavbar, onResetShowNavbar, onChangeColor } = props;

  const url = useLocation();
  const setNavigation = updatePathnames(getUrlComponent(url.pathname));

  return (
    <>
      {/* <!-- ========== HEADER ========== --> */}
      <header className={`header ${onChangeColor()}`}>
        <div className="header__logo">
          <h1>
            <Link to={"/index"} onClick={onResetShowNavbar}>
              Aurelio MB
            </Link>
          </h1>
        </div>

        <nav className={showNavbar ? "nav show" : "nav"} id="nav-menu">
          <div className="nav__content bd-grid">
            <div className="nav__menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <Link
                    to="/index"
                    className={`nav__link link__design ${setNavigation[0].class}`}
                    onClick={onResetShowNavbar}
                  >
                    Inicio
                  </Link>
                </li>

                <li className="nav__item">
                  <Link
                    to="/portfolio"
                    className={`nav__link link__design ${setNavigation[1].class}`}
                    onClick={onResetShowNavbar}
                  >
                    Portafolio
                  </Link>
                </li>

                <li className="nav__item">
                  <Link
                    to="/contact"
                    className={`nav__link link__design ${setNavigation[2].class}`}
                    onClick={onResetShowNavbar}
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="header__toggle">
          <button onClick={onShowNavbar}>
            <i className="uil uil-bars" id="header-toggle"></i>
          </button>
        </div>
      </header>
    </>
  );
}
