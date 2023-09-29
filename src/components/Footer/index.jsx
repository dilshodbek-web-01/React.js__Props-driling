import React from "react";
import "./style.scss";

const index = ({ theme, language, lang }) => {
  const t = language[lang];

  const footerStyle = {
    backgroundColor: theme === "dark" ? "silver" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
  };

  return (
    <>
      <footer className="footer p-3 text-center shadow-lg" style={footerStyle}>
        <div className="container">
          <p className="footer-text">
            {t.copyright} N70 group {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
};

export default index;
