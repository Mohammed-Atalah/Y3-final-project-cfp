import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="navBarCon">
      <p className="navTitle">Be Prepared.</p>
      <ul className="navPagesCon">
        <li>
          <p>Scholarships</p>
        </li>
        <li>
          <p>Universities</p>
        </li>
        <li>
          <p>Tests</p>
        </li>
        <li>
          <p>Volunteer</p>
        </li>
        <li>
          <p>Contact Us</p>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
