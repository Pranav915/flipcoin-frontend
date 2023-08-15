import React from "react";
import ClothCard from "./ClothCard";
import { Box, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const OutfitCard = () => {
  var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Box>
      <Carousel sx={{ width: "100%" }}>
        <Paper sx={{ display: "flex", m: 2 }}>
          {items.map((item, i) => (
            <Box sx={{ display: "flex" }}>
              <ClothCard />
            </Box>
          ))}
        </Paper>
      </Carousel>
    </Box>
  );
};

export default OutfitCard;
