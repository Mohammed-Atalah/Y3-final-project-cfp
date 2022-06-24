import "../styles/Items.css";
import Item from "./Item";
import React from "react";
import { db } from "../firebaseconfig";
import { onSnapshot, collection } from "firebase/firestore";
import TextField from "@mui/material/TextField";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import Box from "@mui/material/Box";

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

      <Box
        sx={{ display: "flex", alignItems: "flex-end" }}
        className="itemsSearchCon"
      >
        {/* <SearchTwoToneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} /> */}
        <TextField
          id="input-with-sx"
          label="Search"
          variant="standard"
          onChange={(e) => Filter(e.target.value)}
          sx={{ width: "400px" }}
          // color="secondary"
          // size="normal"
          autoFocus
        />
      </Box>
      {/* <div className="itemsSearchCon">
        <input type="text" placeholder="Search" />
      </div> */}
      <div
        style={{
          display: "flex",
          "flex-wrap": "wrap",
          "justify-content": "space-around",
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
