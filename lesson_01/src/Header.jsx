import React from "react";

const Header = ({ heading = "Default Heading" }) => {
  return (
    <header>
      <h1>{heading}</h1>
    </header>
  );
};

export default Header;
