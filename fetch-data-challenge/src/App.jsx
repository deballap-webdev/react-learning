import React from "react";
import Form from "./Form";
import Content from "./Content";
import apiRequest from "./apiRequest";
const App = () => {
  const { useState, useEffect } = React;
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const mySection =
      JSON.parse(localStorage.getItem("myCurrentSection")) ||
      currentSection ||
      "users";
    setCurrentSection(mySection);
    setIsLoading(true);
    apiRequest(mySection).then((jsonData) => {
      if (jsonData.error) {
        setFetchError(jsonData.error);
        setIsLoading(false);
        return;
      }

      setItems(jsonData);
      setFetchError(null);
      setIsLoading(false);
    });
  }, [currentSection]);

  return (
    <div>
      <Form
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        fetchError={fetchError}
      />
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && (
          <p style={{ color: "red", textAlign: "center" }}>{fetchError}</p>
        )}
        {!fetchError && !isLoading && <Content listArray={items} />}
      </main>
    </div>
  );
};

export default App;
