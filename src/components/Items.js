import "../styles/Items.css";
import Item from "./Item";
import React from "react";
import { db } from "../firebaseconfig";
import { onSnapshot, collection } from "firebase/firestore";
import TextField from "@mui/material/TextField";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import Box from "@mui/material/Box";

function Items({ title, searchData = "" }) {
  console.log(searchData);

  const [Data, setData] = React.useState([]);
  const [mainData, setMainData] = React.useState([]);
  React.useEffect(() => {
    onSnapshot(collection(db, title.toLowerCase()), (snapshot) => {
      let newData = [];
      snapshot.docs.map((doc) => newData.push({ ...doc.data(), id: doc.id }));
      setMainData(newData);
      let e = 0;
      let sz = newData.length;
      let i = 0;
      let notFound = false;
      setData(
        newData.filter((el) => {
          i++;
          if (searchData === "") {
            return el;
          } else {
            if (el.title.toLowerCase().includes(searchData.toLowerCase())) {
              e++;
              return true;
            } else {
              if (i === sz && e === 0) {
                notFound = true;
              }
              return false;
            }
          }
        })
      );
      if (notFound) {
        setData([{ title: `We couldn't find anything for "${searchData}"` }]);
      }
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
        }
      })
    );
    if (notFound) {
      setData([{ title: `We couldn't find anything for "${str}"` }]);
    }
  };
  return (
    <div className="items">
      <p className="itemsTitle">{title}</p>

      <Box
        sx={{ display: "flex", alignItems: "flex-end" }}
        className="itemsSearchCon"
      >
        <TextField
          id="input-with-sx"
          label="Search"
          variant="standard"
          onChange={(e) => Filter(e.target.value)}
          sx={{ width: "300px" }}
          autoFocus
          defaultValue={searchData}
        />
      </Box>
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
