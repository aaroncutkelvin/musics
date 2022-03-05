import React from "react";
import VideoPlayer from "./Video";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { reggaeList } from "../musicList";
import reggae_heading from "../img/reggae_heading.PNG";

function CreateVideo(reggaeList) {
  return (
    <Card sx={{ width: 1 / 4, m: 4, height: 1 / 4 }}>
      <VideoPlayer
        url={reggaeList.url}
        title={reggaeList.title}
        description={reggaeList.description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {reggaeList.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {reggaeList.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function Reggae() {
  return (
    <div className="test">
      <img className="head" src={reggae_heading} />
      <dl className="div_display">{reggaeList.map(CreateVideo)}</dl>
    </div>
  );
}
export default Reggae;
