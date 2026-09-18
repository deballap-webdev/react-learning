import React from "react";
import NavLink from "./NavLink";

const Nav = ({
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
    <nav>
      {sectionArray.map((section) => (
        <NavLink
          key={section.key}
          section={section.section}
          getAndSetList={getAndSetList}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          fetchError={fetchError}
        />
      ))}
    </nav>
  );
};

export default Nav;
