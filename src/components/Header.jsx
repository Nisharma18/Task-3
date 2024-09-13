import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      <nav>
        <span
          style={{
            fontSize: "24px",
            color: "white",
            marginRight: "20px",
            cursor: "pointer",
          }}
        >
          &#9776;
        </span>
        <h1>Note</h1>
      </nav>
     
    </>
  );
};

export default Header;
