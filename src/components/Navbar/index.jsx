import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

const index = ({ lang, theme, setLang, setTheme, language }) => {

  const headerStyle = {
    backgroundColor: theme === "dark" ? "black" : "#fbfb",
    color: theme === "dark" ? "#fff" : "#000",
  };

  const t = language[lang];

  return (
    <>
      <header style={headerStyle} className="shadow-lg">
        <div className="container">
          <nav className="nav">
            <h2 className="nav-logo">Reactjs.uz</h2>
            <ul className="nav__list d-flex w-50 align-items-center justify-content-between">
              <li className="nav__list--item">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                  to="/"
                >
                  {t.home}
                </NavLink>
              </li>
              <li className="nav__list--item">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                  to="/about"
                >
                  {t.about}
                </NavLink>
              </li>
            </ul>

            <div className="d-flex gap-3">
              <select
                className="form-select"
                onChange={(e) => {
                  setTheme(e.target.value);
                  localStorage.setItem("theme", e.target.value);
                }}
              >
                <option selected disabled>
                  {localStorage.getItem("theme") || "Select theme"}
                </option>
                <option value="dark">{t.dark}</option>
                <option value="light">{t.light}</option>
              </select>

              <select className="form-select"
                onChange={(e) => {
                  setLang(e.target.value);
                  localStorage.setItem("langs", e.target.value);
                }}>
                <option selected disabled>
                  {localStorage.getItem("langs") || "Select language"}
                </option>
                <option value="en">Eng</option>
                <option value="uz">Uzb</option>
              </select>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default index;

