import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Favourite Student List</h1>

      <Link to="/">Student List</Link>{" "}
      <Link to="/favourites">Favourite Students</Link>
    </nav>
  );
}

export default Navbar;