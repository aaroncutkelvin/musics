import React from "react";
import { hiphopList } from "../musicList";
import VideoPlayer from "./Video";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import hiphop_heading1 from "../img/hiphop_heading1.PNG";

function AddVideo(hiphopList) {
  return (
    <Card sx={{ maxWidth: 450, m: 2 }}>
      <VideoPlayer
        url={hiphopList.url}
        title={hiphopList.title}
        description={hiphopList.description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {hiphopList.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hiphopList.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function Hiphop() {
  return (
    <div className="test">
      <div>
        <img className="head" src={hiphop_heading1} />
        <dl className="div_display">{hiphopList.map(AddVideo)}</dl>
      </div>
    </div>
  );
}
export default Hiphop;
