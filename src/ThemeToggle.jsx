import React from "react";
import { useGlobalContext } from "./context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import "./index.css";
export default function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  //console.log(isDarkTheme);
  //   const toggle = isDarkTheme ? "dark-theme" : "";
  //   console.log(toggle);
  return (
    
    <section className="toggle-container">
      {/* // <section className={`toggle-container ${isDarkTheme ? "dark-theme" : ""}`}> */}
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
      </button>
    </section>
    
  );
}
