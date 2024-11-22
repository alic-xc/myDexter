import { Typography } from "@mui/material";
import React from "react";

interface TagProps {
  children: React.ReactNode | string;
}

const Tag = (props: TagProps) => {
  return (
    <Typography
      fontSize={16}
      fontWeight={400}
      color={"#0F182A"}
      sx={{
        px: 2,
        py: 0.5,
        borderRadius: 5,
        boxShadow: 1,
      }}
    >
      {props.children}
    </Typography>
  );
};

export default Tag;
