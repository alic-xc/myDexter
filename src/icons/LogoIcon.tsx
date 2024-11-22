import { SvgIconProps } from "@mui/material";
import React from "react";

const LogoIcon = (props: SvgIconProps) => {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31.987 0H8.013A8.013 8.013 0 000 8.013v23.974A8.013 8.013 0 008.013 40h23.974A8.013 8.013 0 0040 31.987V8.013A8.013 8.013 0 0031.987 0z"
        fill="url(#paint0_linear_2268_16)"
      />
      <path
        d="M30.414 7.625h-2.019s-.756 3.776-4.81 3.776h-3.811c-5.6 0-10.197 4.84-10.197 10.217l.013.347c0 5.76 4.866 10.267 10.109 10.267h.22c6.46 0 10.508-5.178 10.508-9.993l-.01-14.614h-.003zm-5.46 14.199a4.963 4.963 0 01-9.924 0 4.963 4.963 0 014.962-4.962h4.962v4.962z"
        fill="url(#paint1_linear_2268_16)"
      />
      <path
        d="M30.414 7.625h-2.019s-.756 3.776-4.81 3.776c3.548 0 6.495-1.394 6.831-3.776h-.002z"
        fill="#FAA858"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2268_16"
          x1={20}
          y1={5.95908}
          x2={20}
          y2={44.7938}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.06} stopColor="#7176FF" />
          <stop offset={0.23} stopColor="#6D68FB" />
          <stop offset={0.54} stopColor="#6546F3" />
          <stop offset={0.95} stopColor="#570EE6" />
          <stop offset={0.97} stopColor="#570DE6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2268_16"
          x1={19.996}
          y1={12.1786}
          x2={19.996}
          y2={43.6938}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#E1E2E3" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LogoIcon;
