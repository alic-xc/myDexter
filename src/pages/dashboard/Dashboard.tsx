import { Box, Stack, Typography } from "@mui/material";
import Logo from "../../icons/Logo";
import ChatInput from "../../components/ChatInput";

const Dashboard = () => {
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
      <ChatInput  />
      <Typography
        width={380}
        textAlign={"center"}
        fontWeight={400}
        fontSize={16}
      >
        Choose a prompt below or write your own to start chatting with Dexter.
      </Typography>
    </Stack>
  );
};

export default Dashboard;
