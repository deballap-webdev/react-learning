import React from "react";

const Content = () => {
  const { useState } = React;
  const [name, setName] = useState("Debbie");
  const [count, setCount] = useState(0);
  const handleNameChange = () => {
    const names = [
      "Debbie",
      "Loveth",
      "Victory",
      "Divine",
      "Victor",
      "Kevin",
      "Luke",
      "Dave",
    ];
    const randomNum = Math.floor(Math.random() * 8);
    setName(names[randomNum]);
  };

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = (name) => {
    console.log(count);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click it</button>
      <button onClick={handleClick2}>Click it</button>
    </main>
  );
};

export default Content;
