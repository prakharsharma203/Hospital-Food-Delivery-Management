import { Link } from "react-router-dom";
// import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h1>Hospital Food Manager</h1>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/diet-charts">Diet Charts</Link>
    </div>
  </nav>
);

export default Navbar;
