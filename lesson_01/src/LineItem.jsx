import React from "react";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <button
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete ${item.item}`}
      >
        Delete
      </button>
    </li>
  );
};

export default LineItem;
