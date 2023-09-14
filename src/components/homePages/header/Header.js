import { Link } from "react-router-dom";
import "./header.css";
// import { useEffect, useState } from "react";
function Header() {
  // useEffect(() => {
  //   const navLinks = document.querySelectorAll(".nav-link");
  //   navLinks.forEach((navLink) => {
  //     navLink.addEventListener("click", () => {
  //       document.querySelector(".active")?.classList.remove("active");
  //       navLink.classList.add("active");
  //     });
  //   });
  //   // console.log(navLinks);
  // }, []);
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg ">
        <div className="container d-f align-items-center">
          <Link className="navbar-brand logo" to="/">
            Netflix
          </Link>
          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center ul-active">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/films">
                  Movies
                </Link>
              </li>
              <li className="nav-item ">
                <Link to={"/login"} className="btn btn-sm btn-danger link-m">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
