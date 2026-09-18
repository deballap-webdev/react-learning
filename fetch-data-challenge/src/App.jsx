import React from "react";
import Nav from "./Nav";
import Content from "./Content";
import apiRequest from "./apiRequest";
import js from "@eslint/js";
const App = () => {
  const { useState, useEffect } = React;

  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState("users");

  useEffect(() => {
    const mySection = JSON.parse(localStorage.getItem("myCurrentSection"));
    setCurrentSection(mySection);
    getAndSetList(mySection);
  }, []);

  const getAndSetList = (endpoint) => {
    apiRequest(endpoint).then((jsonData) => {
      if (jsonData.error) {
        setFetchError(jsonData.error);
        setIsLoading(false);
        return;
      }
      const myData = jsonData.map((data) => {
        return { key: data.id, content: JSON.stringify(data) };
      });
      setItems(myData);
      setFetchError(null);
      setIsLoading(false);
    });
  };

  return (
    <div>
      <Nav
        getAndSetList={getAndSetList}
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
