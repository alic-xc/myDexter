import { SvgIconProps } from "@mui/material";
import React from "react";

const HelpIcon = (props: SvgIconProps) => {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <g clipPath="url(#clip0_2268_7813)">
        <path
          d="M6.06 6a2 2 0 013.887.667c0 1.333-2 2-2 2M8 11.334h.007M14.667 8A6.667 6.667 0 111.334 8a6.667 6.667 0 0113.333 0z"
          stroke="#667085"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2268_7813">
          <path fill="#fff" d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HelpIcon;
