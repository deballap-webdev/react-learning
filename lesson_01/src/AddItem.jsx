import React from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const { useRef } = React;
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        id="addItem"
        autoFocus
        ref={inputRef}
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        +
      </button>
    </form>
  );
};

export default AddItem;
