import React from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../../assets/Images/logo-img.png";

const Navbar = () => {
  const smallDeviceNavLinks = (
    <>
      <li>
        <NavLink to={"/"}> Home</NavLink>
      </li>
      <li>
        <NavLink to={"/our-story"}>Our Story</NavLink>
      </li>
      <li>
        <NavLink to={"/activities"}>Activities</NavLink>
      </li>
      <li>
        <a>Members</a>
        <ul className="p-2">
          <li>
            <a>Patron Council</a>
            <ul className="p-2">
              <li>
                <a>Present (25-26)</a>
              </li>
              <li>
                <a>Previous (24-25)</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Advisory Council</a>
            <ul className="p-2">
              <li>
                <a>Present (25-26)</a>
              </li>
              <li>
                <a>Previous (24-25)</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Mentor Council</a>
          </li>
          <li>
            <a>Founding Council</a>
          </li>
          <li>
            <a>Executive Committee</a>
            <ul className="p-2">
              <li>
                <a>Programming Unit - PCPU</a>
              </li>
              <li>
                <a>Present (25-26)</a>
              </li>
              <li>
                <a>Previous (24-25)</a>
              </li>
              <li>
                <a>Robotics Unit -PCRU</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <Link to={"/contact-us"}>Contact Us</Link>
      </li>
    </>
  );

  const largeDeviceNavLinks = (
    <>
      <li>
        <NavLink to={"/"}> Home</NavLink>
      </li>
      <li>
        <NavLink to={"/our-story"}>Our Story</NavLink>
      </li>
      <li>
        <NavLink to={"/activities"}>Activities</NavLink>
      </li>
      <li>
        <details>
          <summary>Members</summary>
          <ul className="w-96 bg-red-300 p-2">
            <details>
              <summary>Patron Council</summary>
              <ul className="p-2">
                <li>
                  <a>Present (25-26)</a>
                </li>
                <li>
                  <a>Previous (24-25)</a>
                </li>
              </ul>
            </details>
            <details>
              <summary>Advisory Council</summary>
              <ul className="p-2">
                <li>
                  <a>Present (25-26)</a>
                </li>
                <li>
                  <a>Previous (24-25)</a>
                </li>
              </ul>
            </details>
            <li>
              <a>Mentor Council</a>
            </li>
            <li>
              <a>Founding Council</a>
            </li>
            <details>
              <summary>Executive Committee</summary>
              <ul className="p-2">
                <li>
                  <a>Programming Unit - PCPU</a>
                </li>
                <li>
                  <a>Present (25-26)</a>
                </li>
                <li>
                  <a>Previous (24-25)</a>
                </li>
                <li>
                  <a>Robotics Unit -PCRU</a>
                </li>
              </ul>
            </details>
          </ul>
        </details>
      </li>
      <li>
        <NavLink to={"/news"}>News</NavLink>
      </li>
    </>
  );

  return (
    <nav className="">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-blue-600 lg:hidden"
            >
              <FaBars />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box mt-3 w-[95vw] bg-red-700 p-2 shadow"
            >
              {smallDeviceNavLinks}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost bg-red-300 pl-1 text-base md:text-xl"
          >
            <img src={logo} alt="logo" className="w-6 lg:w-10" />
            Programimng Club
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal z-1 px-1">
            {largeDeviceNavLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/contact-us"} className="btn bg-blue-500">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
