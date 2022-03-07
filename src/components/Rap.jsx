import React from "react";
import VideoPlayer from "./Video";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { rapList } from "../musicList";
import rap_heading from "../img/rap_heading.PNG";

function CreateVideo(rapList) {
  return (
    <Card sx={{ width: 1 / 4, m: 4, height: 1 / 4 }}>
      <VideoPlayer
        url={rapList.url}
        title={rapList.title}
        description={rapList.description}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          fontSize={{
            lg: 18,
            md: 16,
            sm: 14,
            xs: 12,
          }}
        >
          {rapList.title}
          <Typography variant="body2" color="text.secondary">
            {rapList.description}
          </Typography>
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
