import { SvgIconProps } from "@mui/material";

const SignInIcon = (props: SvgIconProps) => {
  return (
    <svg
      width={26}
      height={27}
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.25 3.609h1.3c1.82 0 2.73 0 3.425.354a3.25 3.25 0 011.42 1.42c.355.696.355 1.606.355 3.426v9.1c0 1.82 0 2.73-.354 3.425a3.25 3.25 0 01-1.42 1.42c-.696.355-1.606.355-3.426.355h-1.3M10.833 7.942l5.417 5.417m0 0l-5.417 5.417m5.417-5.417h-13"
        stroke="#475467"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SignInIcon;
