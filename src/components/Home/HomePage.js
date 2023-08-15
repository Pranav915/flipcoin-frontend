import React, { useState } from "react";
import HomeNavbar from "./HomeNavbar";
import OutfitCard from "./OutfitCard";
import { Box, Fab } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import ChatBox from "./Chat/ChatBox";

const HomePage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      <HomeNavbar />
      <Box sx={{ mt: 9, width: "100%" }}>
        <OutfitCard />
        <OutfitCard />
        <OutfitCard />
        <OutfitCard />
      </Box>
      {isChatOpen ? (
        <ChatBox />
      ) : (
        <Fab
          color="primary"
          variant="extended"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 40,
            right: 40,
            zIndex: 1,
          }}
          onClick={() => {
            setIsChatOpen(true);
          }}
        >
          <ChatIcon />
          Chat
        </Fab>
      )}
    </>
  );
};

export default HomePage;
