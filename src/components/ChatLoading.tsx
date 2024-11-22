import React from "react";
import { Box, Avatar, Skeleton } from "@mui/material";
import LogoIcon from "../icons/LogoIcon";

const ChatLoading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        padding: 2,
        borderRadius: 2,
        width: "100%",
        margin: "16px auto",
      }}
    >
      <Avatar
        sx={{
          color: "#fff",
          width: 40,
          height: 40,
          alignSelf: "flex-start",
        }}
      >
        <LogoIcon />
      </Avatar>
      <Box sx={{ flex: 1 }}>
        <Skeleton variant="text" width="100%" height={20} />
        <Skeleton variant="text" width="90%" height={20} />
        <Skeleton variant="text" width="80%" height={20} />
        <Skeleton variant="text" width="70%" height={20} />
      </Box>
    </Box>
  );
};

export default ChatLoading;
