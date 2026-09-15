import React from "react";

const ColorInput = ({ color, setColor }) => {
  return (
    <form className="color-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="addColor"> Add Color Name</label>
      <input
        type="text"
        role="search"
        id="addColor"
        placeholder="Add Color Name"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        autoFocus
      />
    </form>
  );
};

export default ColorInput;
