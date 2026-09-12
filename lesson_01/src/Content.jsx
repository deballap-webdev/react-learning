import React from "react";

const Content = () => {
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
    return names[randomNum];
  };

  const handleClick = () => {
    console.log("You clicked it");
  };

  const handleClick2 = (name) => {
    console.log(`${name} clicked it`);
  };
  const handleClick3 = (event) => {
    console.log(event.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click it</button>
      <button onClick={() => handleClick2("Debbie")}>Click it</button>
      <button onClick={handleClick3}>Click it</button>
    </main>
  );
};

export default Content;
