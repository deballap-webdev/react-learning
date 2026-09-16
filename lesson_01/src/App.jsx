import Header from "./Header";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";
import React from "react";
import AddItem from "./AddItem";
function App() {
  const API_UEL = `http://localhost:3500/items`;

  const { useState, useEffect } = React;
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("grocery-list") || []),
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("grocery-list", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 0;
    const listItems = [
      ...items,
      {
        id,
        checked: false,
        item,
      },
    ];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header heading="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase().trim()),
        )}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
