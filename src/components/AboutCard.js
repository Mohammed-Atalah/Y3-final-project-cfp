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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function AboutCard({ data }) {
  return (
    <Card
      sx={{
        width: "300px",
        "margin-bottom": "40px",
        " display": "flex",
        "flex-direction": "column",
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
        <CardMedia component="img" height="250" image={data.imgLink} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
        </CardContent>
      </Box>

      <CardActions
        sx={{
          display: "flex",
          "margin-top": "16px",
          "justify-content": "space-between",
        }}
      >
        <Button size="small" target="__blank" href={data.contactLink}>
          Contact Me
        </Button>
      </CardActions>
    </Card>
  );
}
