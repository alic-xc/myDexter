import * as React from "react";

const AnalyticsIcon = (props: SvgIconProps) => {
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
        d="M21.666 22.025v-7.583M13 22.025V11.192M4.333 22.025v-4.333m10.19-11.887l5.6 2.1m-8.425-1.696l-6.065 4.55m17.182-3.425a1.625 1.625 0 11-2.298 2.298 1.625 1.625 0 012.298-2.298zm-17.333 3.25a1.625 1.625 0 11-2.298 2.298 1.625 1.625 0 012.298-2.298zm8.667-6.5a1.625 1.625 0 11-2.298 2.298 1.625 1.625 0 012.298-2.298z"
        stroke="#475467"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AnalyticsIcon;
