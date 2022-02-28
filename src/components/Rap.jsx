import React from "react";
import VideoPlayer from "./Video";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { rapList } from "../musicList";
import rap_heading from "../img/rap_heading.PNG";

function CreateVideo(rapList) {
  return (
    <Card sx={{ maxWidth: 450, m: 2 }}>
      <VideoPlayer
        url={rapList.url}
        title={rapList.title}
        description={rapList.description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {rapList.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {rapList.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function Rap() {
  return (
    <div className="test">
      <img className="head" src={rap_heading} />

      <dl className="div_display">{rapList.map(CreateVideo)}</dl>
    </div>
  );
}
export default Rap;
