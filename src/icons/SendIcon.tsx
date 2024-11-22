import { SvgIconProps } from '@mui/material'
import React from "react";

const SendIcon = (props: SvgIconProps) => {
  return (
    <svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.935 13.064L20.936 2.063M10.068 13.408l2.754 7.081c.243.624.364.936.539 1.027.151.079.332.079.483 0 .175-.09.297-.402.54-1.026L21.29 2.795c.22-.563.33-.844.27-1.024a.524.524 0 00-.331-.33c-.18-.061-.461.049-1.024.269L2.509 8.615c-.624.243-.935.365-1.026.54a.524.524 0 000 .483c.091.175.403.296 1.027.539l7.08 2.754c.128.049.19.074.244.112a.523.523 0 01.122.122c.038.053.063.117.112.243z"
        stroke="#98A2B3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SendIcon;
