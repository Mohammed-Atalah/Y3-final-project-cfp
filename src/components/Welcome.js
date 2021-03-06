import { Link } from "react-router-dom";
import "../styles/Welcome.css";
import React from "react";

function Welcome() {
  const [search, setSearch] = React.useState("");
  return (
    <div className="welcomeCon">
      <p className="welcomeIntroSent"/>
      
  
      <div className="welcomeSearchCon">
        <input placeholder="Search for a scholarship" type="text" onChange={(e) => setSearch(e.target.value)} />
        <Link
          style={{ "text-decoration": "none" }}
          to="/scholarships"
          state={{ searchStr: search }}
          className="welcomeSearchBtn"
        >
          <p>Search</p>
        </Link>
      </div>
      {/* <div
        style={{
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
          "justify-content": "space-around",
        }}
      ></div> */}
    </div>
  );
}

export default Welcome;
