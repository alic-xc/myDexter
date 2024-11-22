import React from "react";
import ChatLoading from "../../components/ChatLoading";
import { Box, Stack } from "@mui/material";
import ChatInput from "../../components/ChatInput";

const Chat = () => {
  const [chats, setChats] = React.useState<chats[]>([]);

  return (
    <Stack
      flex={1}
      direction={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      py={5}
      gap={3}
    >
      <Box
        sx={{
          width: { md: 700, sm: "100%", xs: "100%" },
          height: "calc(100% - 80px )",
          overflow: "auto",
        }}
      >
        <ChatLoading />
      </Box>
      <ChatInput
        onSend={(message) => {
          setChats((prevState) => [
            ...prevState,
            { question: message, response: "This is a test" },
          ]);
        }}
      />
    </Stack>
  );
};

export default Chat;
