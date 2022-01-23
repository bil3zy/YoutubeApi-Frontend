import React from "react";
import SearchBar from "./SearchBar";
import "./Header.css";
import logo from "../images/play-video-logo.png";

const Header = ({ onTermSubmit }) => {
  return (
    <div className="headers">
      <img className="logo" src={logo} alt="Logo" height={40} width={40} />
      <SearchBar onTermSubmit={onTermSubmit} />
    </div>
  );
};

export default Header;
