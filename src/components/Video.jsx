import React from "react";
import ReactPlayer from "react-player";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function VideoPlayer(props) {
  return (
    <ReactPlayer url={props.url} width="100%" height="100" controls={true} />
  );
}

function Details(props) {
  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {props.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.description}
      </Typography>
    </CardContent>
  );
}

export default VideoPlayer;
export { Details };
