import "../styles/Items.css";
import Item from "../components/Item";
import Items from "../components/Items";
import React from "react";
import { db, auth } from "../firebaseconfig";
import { onSnapshot, collection } from "firebase/firestore";
import TextField from "@mui/material/TextField";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import Box from "@mui/material/Box";
import { doc, getDoc } from "firebase/firestore";

let E = 0;

function Favs() {
  const [Data, setData] = React.useState([]);

  // console.log(fav);
  const [scholarships, setScholarships] = React.useState([]);
  //   console.log(scholarships);
  const [universities, setUniversities] = React.useState([]);
  const [tests, setTests] = React.useState([]);
  const [stem, setSTEM] = React.useState([]);
  const [count, setCount] = React.useState(0);

  const [scholarshipsCheck, setScholarshipsCheck] = React.useState(false);
  const [universitiesCheck, setUniversitiesCheck] = React.useState(false);
  const [testsCheck, setTestsCheck] = React.useState(false);
  const [stemCheck, setSTEMCheck] = React.useState(false);

  //   console.log(fav);

  const getData = async () => {
    onSnapshot(collection(db, "scholarships"), async (snapshot) => {
      let newData = [];
      snapshot.docs.map((doc) => {
        newData.push({ ...doc.data(), id: doc.id });
      });

      try {
        const docSnap = await getDoc(doc(db, "users", auth.currentUser.uid));
        let fav = docSnap.data().favorites;
        // console.log(newData);
        setScholarships(
          newData.filter(
            (it) =>
              fav["scholarships"][it.id] !== undefined &&
              fav["scholarships"][it.id]
          )
        );

        setScholarshipsCheck(true);
      } catch (error) {
        console.log(error);
      }
      ///
      //   setScholarships(newData);
    });
    onSnapshot(collection(db, "universities"), async (snapshot) => {
      let newData = [];
      snapshot.docs.map((doc) => {
        newData.push({ ...doc.data(), id: doc.id });
      });

      try {
        const docSnap = await getDoc(doc(db, "users", auth.currentUser.uid));
        let fav = docSnap.data().favorites;
        setUniversities(
          newData.filter((it) => {
            if (
              fav["universities"][it.id] !== undefined &&
              fav["universities"][it.id]
            ) {
              // console.log(it);
              return true;
            }
          })
        );
        setUniversitiesCheck(true);
      } catch (error) {
        console.log(error);
      }
    });

    onSnapshot(collection(db, "tests"), async (snapshot) => {
      let newData = [];
      snapshot.docs.map((doc) => {
        newData.push({ ...doc.data(), id: doc.id });
      });

      try {
        const docSnap = await getDoc(doc(db, "users", auth.currentUser.uid));
        let fav = docSnap.data().favorites;
        //   console.log(fav);
        setTests(
          newData.filter((it) => {
            if (fav["tests"][it.id] !== undefined && fav["tests"][it.id]) {
              // console.log(it);
              return true;
            }
          })
        );
        setTestsCheck(true);
      } catch (error) {
        console.log(error);
      }
    });
    onSnapshot(collection(db, "stem learning sources"), async (snapshot) => {
      let newData = [];
      snapshot.docs.map((doc) => {
        newData.push({ ...doc.data(), id: doc.id });
      });

      try {
        const docSnap = await getDoc(doc(db, "users", auth.currentUser.uid));
        let fav = docSnap.data().favorites;
        //   console.log(fav);
        setSTEM(
          newData.filter((it) => {
            if (fav["stem"][it.id] !== undefined && fav["stem"][it.id]) {
              // console.log(it);
              return true;
            }
          })
        );
        setSTEMCheck(true);
      } catch (error) {
        console.log(error);
      }
    });
  };
  //   console.log("scholarships");
  console.log(count);
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="itemsCon">
      <p className="itemsTitle favTitle">Favorites</p>
      {scholarshipsCheck && scholarships.length > 0 && (
        <Items title="Scholarships" dataIsProvided={true} data={scholarships} />
      )}
      {universitiesCheck && universities.length > 0 && (
        <Items title="Universities" dataIsProvided={true} data={universities} />
      )}

      {testsCheck && tests.length > 0 && (
        <Items title="Tests" dataIsProvided={true} data={tests} />
      )}
      {stemCheck && stem.length > 0 && (
        <Items
          title="STEM Learning Sources"
          dataIsProvided={true}
          data={stem}
        />
      )}
    </div>
  );
}

export default Favs;
