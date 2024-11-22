import { useState } from "react";
import { Box, TextField, IconButton, Typography, Stack } from "@mui/material";
import SendIcon, { ActiveSendIcon } from "../icons/SendIcon";
import MagicAIIcon from "../icons/MagicAIIcon";
import { useNavigate } from "react-router-dom";

const ChatInput = ({ onSend }: { onSend: (message: string) => void }) => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage("");
      navigate("/chats");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: 700,
        height: "61px",
        gap: 1,
        padding: 1,
        border: "1px solid",
        borderColor: "#D0D5DD",
        borderRadius: 4,
        backgroundColor: "#fff",
        boxShadow: 1,
      }}
    >
      <IconButton
        color="primary"
        onClick={handleSend}
        disabled={!message.trim()}
        sx={{
          alignSelf: message.length > 76 ? "flex-start" : "center",
        }}
      >
        <MagicAIIcon style={{ color: "red" }} />
      </IconButton>
      <TextField
        fullWidth
        multiline
        maxRows={7}
        variant="outlined"
        placeholder="Ask Dexter a question.. "
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            border: 0,
            outline: 0,
          },
          border: 0,
        }}
      />
      <Stack
        alignSelf={message.length > 76 ? "flex-end" : "center"}
        direction="row"
        justifyContent={"center"}
        alignItems="center"
      >
        <Typography fontWeight={400} fontSize={16}>
          {message.length}/2000
        </Typography>
        <IconButton
          color="primary"
          onClick={handleSend}
          disabled={!message.trim()}
        >
          {message.length > 1 ? <ActiveSendIcon /> : <SendIcon />}
        </IconButton>
      </Stack>
    </Box>
  );
};

export default ChatInput;
