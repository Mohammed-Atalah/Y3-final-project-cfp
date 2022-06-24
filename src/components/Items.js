import "../styles/Items.css";
import Item from "./Item";
import React from "react";
import { db } from "../firebaseconfig";
import { onSnapshot, collection } from "firebase/firestore";

function Items({ title }) {
  const [Data, setData] = React.useState([]);
  const [mainData, setMainData] = React.useState([]);
  React.useEffect(() => {
    onSnapshot(collection(db, title.toLowerCase()), (snapshot) => {
      let newData = [];
      setData(
        snapshot.docs.map((doc) => newData.push({ ...doc.data(), id: doc.id }))
      );
      setData(newData);
      setMainData(newData);
    });
  }, []);
  const Filter = (str) => {
    let e = 0;
    let sz = mainData.length;
    let i = 0;
    let notFound = false;
    setData(
      mainData.filter((el) => {
        i++;
        if (str === "") {
          return el;
        } else {
          if (el.title.toLowerCase().includes(str.toLowerCase())) {
            e++;
            return true;
          } else {
            if (i === sz && e === 0) {
              notFound = true;
            }
            return false;
          }
          // return el.title.toLowerCase().includes(str.toLowerCase());
        }
      })
    );
    if (notFound) {
      setData([{ title: `We couldn't find anything for "${str}"` }]);
    }
  };
  return (
    <div className="iteems">
      <p className="itemsTitle">{title}</p>
      <div className="itemsSearchCon">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => Filter(e.target.value)}
          autoFocus
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
