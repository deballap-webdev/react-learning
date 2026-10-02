import useWindowSize from "./hooks/useWindowSize";
import { FaTabletAlt, FaMobileAlt, FaLaptop } from "react-icons/fa";

const Header = ({ title }) => {
  const { width } = useWindowSize();
  return (
    <header className="Header">
      <h1>{title}</h1>
      <div>
        {width < 768 ? (
          <FaMobileAlt />
        ) : width < 992 ? (
          <FaTabletAlt />
        ) : (
          <FaLaptop />
        )}
      </div>
    </header>
  );
};

export default Header;
