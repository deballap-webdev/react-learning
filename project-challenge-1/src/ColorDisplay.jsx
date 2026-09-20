import React from "react";

const ColorDisplay = ({ color }) => {
  return (
    <section
      className="display"
      style={{
        backgroundColor: color,
      }}
    >
      <p>{color ? color : "Empty Value"}</p>
    </section>
  );
};

export default ColorDisplay;
