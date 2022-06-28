import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig";
import "../styles/NavBar.css";
import { signOut } from "firebase/auth";

const topNav = [
  { id: 1, label: "Scholarships", href: "/scholarships" },
  { id: 2, label: "Universities", href: "/universities" },
  { id: 3, label: "Tests", href: "/tests" },
  { id: 5, label: "STEM Learning Sources", href: "/STEM" },
  { id: 6, label: "Favorites", href: "/favorites" },
  { id: 7, label: "Sign out" },
];

const NavBar = ({ SignedIn, setSignIn }) => {
  const navigate = useNavigate();
  // console.log(SignedIn);
  const [navItems, setNavItems] = useState([]);
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");

  useEffect(() => {
    console.log(SignedIn);
    if (SignedIn) {
      setNavItems(topNav);
    } else {
      setNavItems([{ id: 1, label: "Sign in", href: "/signin" }]);
    }
  }, [SignedIn]);

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
            {navItems.map((item) => {
              if (item.label === "Sign out") {
                return (
                  <li
                    key={item.id}
                    className="nav__item"
                    className="nav__link"
                    style={{ "text-decoration": "none", cursor: "grab" }}
                    onClick={() => {
                      setSignIn(false);
                      signOut(auth);
                      navigate("/");
                      console.log("got em");
                    }}
                  >
                    Sign out
                  </li>
                );
              } else {
                return (
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
                );
              }
            })}
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
