import React from "react";
import VideoPlayer from "./Video";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { popList } from "../musicList";
import pop_heading1 from "../img/pop_heading1.PNG";

function CreateVideo(popList) {
  return (
    <Card sx={{ maxWidth: 450, m: 2 }}>
      <VideoPlayer
        url={popList.url}
        title={popList.title}
        description={popList.description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {popList.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {popList.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function Pop() {
  return (
    <div className="test">
      <img className="head" src={pop_heading1} />
      <dl className="div_display">{popList.map(CreateVideo)}</dl>
    </div>
  );
}
export default Pop;
