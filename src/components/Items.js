import "../styles/Items.css";
import Item from "./Item";
import React from "react";
import { db, auth } from "../firebaseconfig";
import { onSnapshot, collection } from "firebase/firestore";
import TextField from "@mui/material/TextField";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import Box from "@mui/material/Box";
import { doc, getDoc } from "firebase/firestore";

function Items({ title, searchData = "", dataIsProvided = false, data }) {
  // console.log(searchData);
  const [bg, setBg] = React.useState("");

  // console.log(bg);

  const [Data, setData] = React.useState([]);

  // console.log(fav);
  const [mainData, setMainData] = React.useState([]);

  React.useEffect(() => {
    if (!dataIsProvided) {
      onSnapshot(collection(db, title.toLowerCase()), (snapshot) => {
        let newData = [];
        snapshot.docs.map((doc) => {
          newData.push({ ...doc.data(), id: doc.id });
        });
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
    } else {
      // console.log(data);
      setData(data);
    }

    if (title === "Scholarships") {
      setBg(
        "https://images.pexels.com/photos/12209943/pexels-photo-12209943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      );
    } else if (title === "Universities") {
      setBg(
        "https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      );
    } else if (title === "Tests") {
      setBg(
        "https://images.pexels.com/photos/6683392/pexels-photo-6683392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      );
    } else if (title === "STEM Learning Sources") {
      console.log(title);

      setBg(
        "https://images.pexels.com/photos/9553905/pexels-photo-9553905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      );
    }
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
    <div className="items" style={{ "background-image": `url(${bg})` }}>
      <div className="itemsWhiteLayer">
        <p className="itemsTitle">{title}</p>

        <Box
          // sx={{ display: "flex", alignItems: "center" }}
          className="itemsSearchCon"
        >
          <div className="welcomeSearchCon">
            <input
              placeholder="Search"
              onChange={(e) => Filter(e.target.value)}
              autoFocus
              defaultValue={searchData}
              type="text"
            />
          </div>
        </Box>
        <div
          style={{
            display: "flex",
            "flex-wrap": "wrap",
            width: "100%",
            "justify-content": "space-around",
          }}
        >
          {Data.map((obj) => {
            return <Item data={obj} title={title.toLowerCase()} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Items;
