import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "../icons/SendIcon";
import MagicAIIcon from "../icons/MagicAIIcon";

const ChatInput = ({ onSend }: { onSend: (message: string) => void }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage(""); // Clear input after sending
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: 700,
        gap: 1,
        padding: 1,
        border: "1px solid",
        borderColor: "#D0D5DD",
        borderRadius: 2,
        backgroundColor: "#fff",
        boxShadow: 1,
      }}
    >
      <IconButton
        color="primary"
        onClick={handleSend}
        disabled={!message.trim()}
      >
        <MagicAIIcon />
      </IconButton>
      <TextField
        fullWidth
        multiline
        maxRows={4}
        variant="outlined"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          },
        }}
      />
      <IconButton
        color="primary"
        onClick={handleSend}
        disabled={!message.trim()}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatInput;
