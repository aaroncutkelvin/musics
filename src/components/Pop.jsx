import React from "react";
import VideoPlayer from "./Video";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { popList } from "../musicList";
import pop_heading1 from "../img/pop_heading1.PNG";

function CreateVideo(popList) {
  return (
    <Card sx={{ width: 1 / 4, m: 4, height: 1 / 4 }}>
      <VideoPlayer
        url={popList.url}
        title={popList.title}
        description={popList.description}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          fontSize={{
            lg: 18,
            md: 16,
            sm: 14,
            xs: 12,
          }}
        >
          {popList.title}
          <Typography variant="body2" color="text.secondary">
            {popList.description}
          </Typography>
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
