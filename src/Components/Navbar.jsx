import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  console.log(theme);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const Link = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#ffcc00" : "#fff",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #ffcc00" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#ffcc00" : "#fff",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #ffcc00" : "",
            };
          }}
        >
          All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#ffcc00" : "#fff",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #ffcc00" : "",
            };
          }}
        >
          Add Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#ffcc00" : "#fff",
              background: isActive ? "transparent" : "",
              border: isActive ? "1px solid #ffcc00" : "",
            };
          }}
        >
          My List
        </NavLink>
      </li>

      {!user ? (
        <li>
          <NavLink
            to="/signin"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "bold",
                color: isActive ? "#ffcc00" : "#fff",
                background: isActive ? "transparent" : "",
                border: isActive ? "1px solid #ffcc00" : "",
              };
            }}
          >
            Sign In
          </NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );
  return (
    <nav className="bg-blue-900 shadow-lg">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Link}
            </ul>
          </div>
          <a className=" text-white b text-3xl">
            Wander<span className="text-[#ffcc00]">Hub</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Link}</ul>
        </div>
        <div className="navbar-end">
          <div className="tooltip tooltip-left mr-6" data-tip="hello">
            <img className="h-14 w-14 rounded-full bg-white" src="https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png" alt="user" />
          </div>

          <label className="flex cursor-pointer  text-white gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              onChange={handleToggle}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;