import { SvgIconProps } from "@mui/material";

const CompanyIcon = (props: SvgIconProps) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.333 11.333h5.334m-3.322-9.49L2.824 5.359c-.303.236-.454.353-.563.5-.096.13-.168.278-.212.434C2 6.469 2 6.66 2 7.043v4.824c0 .746 0 1.12.145 1.405.128.25.332.455.583.583.285.145.659.145 1.405.145h7.734c.746 0 1.12 0 1.405-.145.25-.128.455-.332.583-.583.145-.285.145-.659.145-1.405V7.043c0-.383 0-.574-.05-.75a1.332 1.332 0 00-.211-.434c-.11-.147-.26-.264-.563-.5L8.655 1.843c-.234-.182-.351-.274-.48-.309a.667.667 0 00-.35 0c-.129.035-.246.127-.48.309z"
        stroke="#667085"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CompanyIcon;
