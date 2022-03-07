import React from "react";
import { soulList } from "../musicList";
import VideoPlayer from "./Video";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import soul_heading from "../img/soul_heading.PNG";

function CreateVideo(soulList) {
  return (
    <Card sx={{ width: 1 / 4, m: 4, height: 1 / 4 }}>
      <VideoPlayer
        url={soulList.url}
        title={soulList.title}
        description={soulList.description}
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
          {soulList.title}
          <Typography variant="body2" color="text.secondary">
            {soulList.description}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}

function Soul() {
  return (
    <div className="test">
      <img className="head" src={soul_heading} />
      <dl className="div_display">{soulList.map(CreateVideo)}</dl>
    </div>
  );
}
export default Soul;
