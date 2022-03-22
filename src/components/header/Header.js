import React from "react";
import HeaderCart from "./HeaderCart";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <HeaderLogo />
        <HeaderCart />
      </div>
    </div>
  );
};

export default Header;
