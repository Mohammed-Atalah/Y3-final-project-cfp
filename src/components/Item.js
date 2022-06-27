import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { auth, db } from "../firebaseconfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function Item({ data, title }) {
  if (title === "STEM Learning Sources") {
    title = "stem";
  }
  // console.log(fav);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  // console.log(auth.currentUser.uid);
  const [fav, setFav] = React.useState();

  const getSetFav = async () => {
    try {
      let e = title;
      if (e.length > 15) {
        e = "stem";
      }
      const docSnap = await getDoc(doc(db, "users", auth.currentUser.uid));
      setFav(docSnap.data().favorites[e.toLowerCase()][data.id]);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getSetFav();
  }, []);

  const addToFav = async () => {
    let e = title;
    if (e.length > 15) {
      e = "stem";
    }
    try {
      await setDoc(
        doc(db, "users", auth.currentUser.uid),
        {
          favorites: { [e]: { [data.id]: true } },
        },
        { merge: true }
      );
      setFav(true);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromFav = async () => {
    let e = title;
    if (e.length > 15) {
      e = "stem";
    }
    try {
      await setDoc(
        doc(db, "users", auth.currentUser.uid),
        {
          favorites: { [e]: { [data.id]: false } },
        },
        { merge: true }
      );
      setFav(false);
    } catch (error) {
      console.log(error);
    }
  };
  const [hover, setHover] = React.useState(false);
  return (
    <Card
      sx={{
        width: "300px",
        "margin-bottom": "40px",
        " display": "flex",
        "flex-direction": "column",
      }}
      raised={hover}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
      // onClick={() => {
      //   openInNewTab(data.link);
      // }}
    >
      <Box
        sx={{
          display: "flex",
          "flex-direction": "column",
          flex: "1 0 auto",
        }}
      >
        {data.imgURL && (
          <CardMedia component="img" height="140" image={data.imgURL} />
        )}
        <CardContent>
          {data.title && (
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
          )}
          {data.organizer && (
            <Typography variant="body2" color="text.secondary">
              {data.organizer}
            </Typography>
          )}
          {data.deadline && (
            <Typography variant="body2" color="text.secondary">
              {data.deadline}
            </Typography>
          )}
        </CardContent>
      </Box>
      {data.link && (
        <CardActions
          sx={{
            display: "flex",
            "margin-top": "16px",
            "justify-content": "space-between",
          }}
        >
          {data.link && (
            <Button size="small" href={data.link} target="__blank">
              Learn More
            </Button>
          )}
          {!fav && data.link && (
            <Button
              size="small"
              onClick={() => {
                addToFav();
              }}
              target="__blank"
            >
              Add to Favorites
            </Button>
          )}
          {fav && data.link && (
            <Button
              size="small"
              onClick={() => {
                removeFromFav();
              }}
              sx={{ color: "gray" }}
              target="__blank"
            >
              Remove from Favorites
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
}
