import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex gap-4">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "font-bold" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "font-bold" : ""}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className={({ isActive }) => isActive ? "font-bold" : ""}>
            Search Page
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
