import * as React from "react";
import Items from "../components/Items";
import { db } from "../firebaseconfig";
import { onSnapshot, collection, getDocs } from "firebase/firestore";

function STEM() {
  // const scholarshipsRef = db.collection("scholarships");

  // console.log(Data);
  return <Items title="STEM learning sources" />;
}

export default STEM;
