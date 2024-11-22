import { SvgIconProps } from "@mui/material";
import React from "react";

const MenuIcon = (props: SvgIconProps) => {
  return (
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.958 11.763h.75m-.75 3.667h.75m-.75-7.334h.75M11 4.43v16.5m0-16.5h4.85c1.54 0 2.31 0 2.899.3A2.75 2.75 0 0119.95 5.93c.3.588.3 1.359.3 2.899v7.7c0 1.54 0 2.31-.3 2.898a2.751 2.751 0 01-1.201 1.202c-.589.3-1.359.3-2.899.3H11m0-16.5H8.15c-1.54 0-2.31 0-2.898.3A2.75 2.75 0 004.05 5.93c-.3.588-.3 1.359-.3 2.899v7.7c0 1.54 0 2.31.3 2.898a2.75 2.75 0 001.202 1.202c.588.3 1.358.3 2.898.3H11"
        stroke="#475467"
        strokeWidth={1.67}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;
