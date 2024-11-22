import { SvgIconProps } from "@mui/material";
import * as React from "react";

const BlogWriterIcon = (props: SvgIconProps) => {
  return (
    <svg
      width={26}
      height={27}
      viewBox="0 0 26 27"
      fill="none"
      {...props}
    >
      <path
        d="M22.75 19.858l-1.084 1.185c-.574.629-1.353.982-2.166.982-.812 0-1.592-.353-2.166-.982-.576-.627-1.355-.98-2.167-.98-.812 0-1.592.353-2.167.98m-9.75.982h1.814c.53 0 .795 0 1.044-.06.221-.053.433-.14.627-.26.218-.134.406-.321.78-.696L21.125 7.4a2.298 2.298 0 10-3.25-3.25L4.265 17.76c-.374.375-.562.562-.696.781a2.167 2.167 0 00-.26.626c-.059.25-.059.515-.059 1.045v1.814z"
        stroke="#475467"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BlogWriterIcon;
