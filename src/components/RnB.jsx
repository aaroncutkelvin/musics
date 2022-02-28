import React from "react";
import VideoPlayer from "./Video";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import rnbVids from "../musicList";
import RnB_heading from "../img/RnB_heading.PNG";

function CreateVideo(rnbVids) {
  return (
    <Card sx={{ maxWidth: 450, m: 2 }}>
      <VideoPlayer
        url={rnbVids.url}
        title={rnbVids.title}
        description={rnbVids.description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {rnbVids.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {rnbVids.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function RnB() {
  return (
    <div className="test">
      <img src={RnB_heading} className="head" />
      <dl className="div_display">{rnbVids.map(CreateVideo)}</dl>
    </div>
  );
}
export default RnB;
