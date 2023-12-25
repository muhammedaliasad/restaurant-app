import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { MdFoodBank } from "react-icons/md";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar bg-orange flex align-center ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container w-100">
        <div className="navbar-content text-white">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Link to="/" className="navbar-brand fw-3 fs-22 ">
                <MdFoodBank />
                <span className="navbar-brand-text fw-7">Meal Web App</span>
              </Link>
            </div>
            <div>
              <ul style={{ listStyle: "none" }}>
                <li style={{ display: "inline-block" }}>
                  <Link to="/">Home</Link>
                </li>

                <li style={{ display: "inline-block" }}>
                  <Link to="/menu">Menu</Link>
                </li>

                <li style={{ display: "inline-block" }}>
                  <Link to="/favorites">My Favourites</Link>
                </li>

                <li style={{ display: "inline-block" }}>
                  <Link
                    onClick={(e) => {
                      navigate("/meal-generator");
                      window.location.reload();
                    }}
                  >
                    Meal Generator
                  </Link>
                </li>
                <li style={{ display: "inline-block" }}>
                  <Link to="/about">About Me</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
