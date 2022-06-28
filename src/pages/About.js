import "../styles/Items.css";
import React from "react";
import { db, auth } from "../firebaseconfig";
import { onSnapshot, collection } from "firebase/firestore";
import TextField from "@mui/material/TextField";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import Box from "@mui/material/Box";
import { doc, getDoc } from "firebase/firestore";
import AboutCard from "../components/AboutCard";

function About({ title, searchData = "", dataIsProvided = false, data }) {
  // console.log(searchData)

  // console.log(bg);

  const Data = [
    {
      name: "Mohammed Atalah",
      imgLink:
        "https://scontent.fgza4-1.fna.fbcdn.net/v/t39.30808-6/213483326_1264745710629505_2467117434084687579_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MPfXeuHAeooAX_9n1Cp&_nc_ht=scontent.fgza4-1.fna&oh=00_AT-bTK1Q1vtO3QV26tHn0xQPz7E3cvlNPWuAWp_0O0b7fg&oe=62BFE36F  ",
      contactLink: "email:mohammed.atalah.2017@gmail.com",
    },

    {
      name: "Hind Wihaidi",
      imgLink:
        "https://scontent.fgza4-1.fna.fbcdn.net/v/t1.15752-9/261074338_353224229937602_1423957538854741327_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=pY0mb0xeN0YAX8KNifA&tn=Esg6yO1XXJNVSTAw&_nc_ht=scontent.fgza4-1.fna&oh=03_AVJRJD8IuoQw9w_yTnv6Fi7BeNP7uMJLN-YOk2wp3mb3CQ&oe=62E124A1",
      contactLink: "email:hind.wihaidio5@gmail.com",
    },
    {
      name: "Kareem Al-Fadi",
      imgLink:
        "https://scontent.fgza4-1.fna.fbcdn.net/v/t1.15752-9/289843647_337714405203164_2155235944023296698_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=0weA9MGtbyIAX_Ok_5F&_nc_ht=scontent.fgza4-1.fna&oh=03_AVKfofv7f07MIBU-ZSsruxtv-fZzPfGEVTDQuMwbRJQ_Ig&oe=62E21478",
      contactLink: "https://www.instagram.com/kareem_alfadi/",
    },
    {
      name: "Fatima Al Zahraa Abu Mnifi",
      imgLink:
        "https://scontent.fgza4-1.fna.fbcdn.net/v/t1.15752-9/290306872_3088587034736668_6150261111790424038_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=8sd37BZo6mEAX9QeHgh&_nc_ht=scontent.fgza4-1.fna&oh=03_AVJ5gTzvHMnEzRHkmRQcVgt7CF99GNi2_l7BPOeXQ0aMkQ&oe=62E03230",
      contactLink: "email:fatmaaa2020a@gmail.com",
    },
  ];

  return (
    <div className="items">
      <div className="itemsWhiteLayer">
        <p className="itemsTitle">Meet our Team</p>
        <div
          style={{
            display: "flex",
            "flex-wrap": "wrap",
            width: "100%",
            "justify-content": "space-around",
          }}
        >
          {Data.map((obj) => {
            return <AboutCard data={obj} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
