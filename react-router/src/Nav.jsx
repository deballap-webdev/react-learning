const Nav = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <form className="searchFrom" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input id="serach" type="text" placeholder="Search "/>
      </form>
    </nav>
  );
};

export default Nav;
