import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div>
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/">About</Link>
              </li>
              <li>
                {" "}
                <Link to="/">Calsses</Link>
              </li>
              <li>
                {" "}
                <Link to="/">Trainers</Link>
              </li>
              <li>
                {" "}
                <Link to="/">princing</Link>
              </li>
              <li>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
