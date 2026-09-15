import React, { useState } from "react";
import ColorDisplay from "./ColorDisplay";
import ColorInput from "./ColorInput";

const App = () => {
  const [color, setColor] = useState("");
  return (
    <main>
      <ColorDisplay color={color} />
      <ColorInput color={color} setColor={setColor} />
    </main>
  );
};

export default App;
