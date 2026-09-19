import React from "react";

const NavButton = ({
  section = "",
  currentSection,
  setCurrentSection,
  fetchError,
}) => {
  const isActive = currentSection === section;
  return (
    <button
      aria-label={`Switch to ${section} section`}
      id={section}
      onClick={() => {
        if (currentSection !== section || fetchError) {
          setCurrentSection(section);
          localStorage.setItem("myCurrentSection", JSON.stringify(section));
        }
      }}
      style={isActive ? { backgroundColor: "#000", color: "#fff" } : null}
    >
      {section}
    </button>
  );
};

export default NavButton;
