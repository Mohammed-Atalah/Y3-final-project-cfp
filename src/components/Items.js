import "../styles/Items.css";
import Item from "./Item";
import React, { useState } from "react";
import { db } from "../firebaseconfig";
import { onSnapshot, collection, getDocs } from "firebase/firestore";

function Items({ title }) {
  const [Data, setData] = React.useState([]);
  const [mainData, setMainData] = React.useState([]);
  // console.log(Data);
  React.useEffect(() => {
    onSnapshot(collection(db, title.toLowerCase()), (snapshot) => {
      let newData = [];
      setData(
        snapshot.docs.map((doc) => newData.push({ ...doc.data(), id: doc.id }))
      );
      setData(newData);
      setMainData(newData);
      // console.log(newData);
    });
  }, []);
  const Filter = (str) => {
    console.log(str);
    setData(
      mainData.filter((el) => {
        if (str === "") {
          return el;
        } else {
          return el.title.toLowerCase().includes(str.toLowerCase());
        }
      })
    );
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
