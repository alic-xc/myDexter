import { Box, Stack, Typography } from "@mui/material";
import Logo from "../../icons/Logo";
import ChatInput from "../../components/ChatInput";
import React from "react";
import Tag from "../../components/Tag";

type chats = {
  question: string;
  response: string;
};

const Dashboard = () => {
  const [chats, setChats] = React.useState<chats[]>([]);

  return (
    <Stack
      flex={1}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
    >
      <Logo />
      <Typography fontWeight={400} fontSize={16}>
        Your personal Ai-powered SEO specialist
      </Typography>
      <Typography fontWeight={500} fontSize={40}>
        Good day!{" "}
      </Typography>
      <ChatInput
        onSend={(message) => {
          setChats((prevState) => [
            ...prevState,
            { question: message, response: "This is a test" },
          ]);
        }}
      />
      <Stack
        direction="column"
        gap={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          width={380}
          textAlign={"center"}
          fontWeight={400}
          fontSize={16}
        >
          Choose a prompt below or write your own to start chatting with Dexter.
        </Typography>
        <Typography>Ask about:</Typography>

        <Stack
          width={800}
          direction={"row"}
          justifyContent={"center"}
          gap={3}
          flexWrap={"wrap"}
        >
          <Tag>Performance and Optimization</Tag>
          <Tag>Visibility and Traffic</Tag>
          <Tag>Content and Keywords</Tag>
          <Tag>Quality and Usability</Tag>
          <Tag>Backlinks</Tag>
          <Tag>Keywords</Tag>
          <Tag>Domain authority</Tag>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
