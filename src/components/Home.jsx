import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Grid from "@mui/material/Grid";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "50 Cent",
    imgPath: "https://wallpapercave.com/dwp1x/Jun5B48.jpg",
  },
  {
    label: "Khalid",
    imgPath: "https://m.media-amazon.com/images/I/91mZztGoxwL._AC_SX679_.jpg",
  },
  {
    label: "Maroon 5",
    imgPath: "https://wallpapercave.com/dwp1x/wp1822237.jpg",
  },
  {
    label: "DaBaby",
    imgPath: "https://wallpapercave.com/wp/wp6612495.jpg",
  },
];

function Home() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3} spacing={0}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label} className="test">
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 615,
                    display: "block",
                    maxWidth: 700,
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                  alignSelf="center"
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Grid>
    </Grid>
  );
}

export default Home;
