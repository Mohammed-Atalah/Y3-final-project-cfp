import Items from "../components/Items";
import "../styles/Items.css";
import { useLocation } from "react-router-dom";

function Scholarships() {
  const location = useLocation();
  let str = "";
  if (location.state !== null) {
    str = location.state.searchStr;
  }

  return (
    <div className="itemsCon">
      <Items title="Scholarships" searchData={str} />
    </div>
  );
}

export default Scholarships;
