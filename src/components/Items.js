import "../styles/Items.css";
import Item from "./Item";
import React, { useState } from "react";

function Items({ title, mainData }) {
  const [Data, setData] = useState(mainData);

  const Filter = (str) => {
    console.log(str);
    const newData = mainData.filter((el) => {
      if (str === "") {
        return el;
      } else {
        return el.title.toLowerCase().includes(str.toLowerCase());
      }
    });
    setData(newData);
  };
  return (
    <div className="iteems">
      <p className="itemsTitle">{title}</p>
      <div className="itemsSearchCon">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => Filter(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          "flex-wrap": "wrap",
        }}
      >
        {Data.map((obj) => (
          <Item data={obj} />
        ))}
      </div>
    </div>
  );
}

export default Items;
