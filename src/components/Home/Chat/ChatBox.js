import { Box } from "@mui/material";
import React from "react";

const ChatBox = () => {
  return (
    <>
      <Box
        sx={{
          width: "30%",
          height: "90%",
          backgroundColor: "black",
          right: 2,
          top: 5,
          "&:hover": {
            backgroundColor: "grey",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </>
  );
};

export default ChatBox;
