import React from "react";

const ColorDisplay = ({ color }) => {
  return (
    <div
      className="display"
      style={{
        backgroundColor: color,
      }}
    >
      {color ? color : "Empty Value"}
    </div>
  );
};

export default ColorDisplay;
