import * as React from "react";
import Items from "../components/Items";
import { db } from "../firebaseconfig";
import { onSnapshot, collection, getDocs } from "firebase/firestore";

function Scholarships() {
  // const scholarshipsRef = db.collection("scholarships");

  // console.log(Data);
  return <Items title="Scholarships" />;
}

export default Scholarships;
