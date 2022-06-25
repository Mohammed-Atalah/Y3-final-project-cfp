import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function Item({ data }) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const [hover, setHover] = React.useState(false);
  return (
    <Card
      sx={{
        width: 345,
        "margin-bottom": "40px",
        " display": "flex",
        "flex-direction": "column",
      }}
      // onMouseOver={() => {
      //   console.log("hello");
      // }}
      raised={hover}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
      onClick={() => {
        openInNewTab(data.link);
      }}
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
          }}
        >
          <Button size="small" href={data.link} target="__blank">
            Learn More
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
