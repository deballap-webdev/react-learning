import React from "react";
import NavButton from "./NavButton";

const Form = ({
  getAndSetList,
  currentSection,
  setCurrentSection,
  fetchError,
}) => {
  const sectionArray = [
    { section: "users", key: 1 },
    { section: "posts", key: 2 },
    { section: "comments", key: 3 },
  ];
  return (
    <form>
      {sectionArray.map((section) => (
        <NavButton
          key={section.key}
          section={section.section}
          getAndSetList={getAndSetList}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          fetchError={fetchError}
        />
      ))}
    </form>
  );
};

export default Form;
