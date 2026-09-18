import React from "react";

const NavLink = ({
  section = "",
  getAndSetList,
  currentSection,
  setCurrentSection,
  fetchError,
}) => {
  const isActive = currentSection === section;
  return (
    <a
      aria-label={`Switch to ${section} section`}
      id={section}
      onClick={() => {
        if (currentSection !== section || fetchError) {
          setCurrentSection(section);
          localStorage.setItem("myCurrentSection", JSON.stringify(section));
          getAndSetList(section);
        }
      }}
      style={isActive ? { backgroundColor: "#000", color: "#fff" } : null}
    >
      {section}
    </a>
  );
};

export default NavLink;
