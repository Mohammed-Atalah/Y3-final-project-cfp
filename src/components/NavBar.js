import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";
const topNav = [
  { id: 1, label: "Scholarships", href: "/scholarships" },
  { id: 2, label: "Universities", href: "/universities" },
  { id: 3, label: "Tests", href: "/tests" },
  { id: 5, label: "STEM Learning Sources", href: "/STEM" },
];

const getTopNav = () => {
  return topNav;
};

const NavBar = () => {
  const [navItems, setNavItems] = useState([]);
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");

  useEffect(() => {
    setNavItems(getTopNav());
  }, []);

  const onToggle = () => {
    collapse === "nav__menu"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };

  return (
    <div className="nav__wrapper">
      <div className="container">
        <nav className="nav">
          <Link
            className="nav__brand"
            style={{ "text-decoration": "none" }}
            to="/"
          >
            We STEM It
          </Link>
          <ul className={collapse}>
            {navItems.map((item) => (
              <li key={item.id} className="nav__item">
                <Link
                  className="nav__link"
                  style={{ "text-decoration": "none" }}
                  to={item.href}
                  onClick={onToggle}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={toggleIcon} onClick={onToggle}>
            <div className="line__1"></div>
            <div className="line__2"></div>
            <div className="line__3"></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
