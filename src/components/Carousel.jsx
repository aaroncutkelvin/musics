import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function Carousell(props) {
  const items = [
    {
      name: { first },
      description: "Full Stack Web Developer",
    },
    {
      name: { second },
      description: "Author",
    },
    {
      name: { third },
      description: "Math Student",
    },
    {
      name: { fourth },
      description: "Math Student",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </Carousel>
  );
}

const Item = ({ name, description }) => {
  return (
    <Paper>
      <h2>{name}</h2>
      <p>{description}</p>
      <Button>more info...</Button>
    </Paper>
  );
};
export default Carousell;
