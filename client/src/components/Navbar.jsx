import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Users</h1>
        </Link>
        <Link to="/login">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
