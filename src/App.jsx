import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { language } from "./lang";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [lang, setLang] = useState(localStorage.getItem('langs') || 'en');

  const mainStyle = {
    backgroundColor: theme === "dark" ? "silver" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
  };

  return (
    <>
      <BrowserRouter>
        <Navbar theme={theme} lang={lang} setLang={setLang} setTheme={setTheme} language={language} />
        <div className="container">
          <main>
            <Routes>
              <Route path="/" element={<Home main={mainStyle} lang={lang} language={language} />} />
              <Route path="/about" element={<About main={mainStyle} lang={lang} language={language} />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
        </div>
        <Footer theme={theme} language={language} lang={lang} />
      </BrowserRouter>
    </>
  );
};

export default App;



