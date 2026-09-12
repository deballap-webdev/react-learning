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

  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
    </main>
  );
};
export default Content;
