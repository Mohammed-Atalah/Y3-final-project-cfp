import "../styles/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBarCon">
      <Link style={{ "text-decoration": "none" }} to="/">
        <p className="navTitle">We STEM It.</p>
      </Link>
      <ul className="navPagesCon">
        <Link style={{ "text-decoration": "none" }} to="/scholarships">
          <li>Scholarships</li>
        </Link>
        <Link style={{ "text-decoration": "none" }} to="/universities">
          <li>Universities</li>
        </Link>

        <Link style={{ "text-decoration": "none" }} to="/tests">
          <li>Tests</li>
        </Link>
        <Link style={{ "text-decoration": "none" }} to="/STEM">
          <li>STEM Learning Sources</li>
        </Link>
        {/* <li>
          <p>Contact Us</p>
        </li> */}
      </ul>
    </div>
  );
}

export default NavBar;
