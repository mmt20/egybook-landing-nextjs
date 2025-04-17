import React from "react";
interface IProps {
  className?: string;
  style?: React.CSSProperties;
}
const CalendarIcon = ({ className, style }: IProps) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M17.3333 2.16666V6.49999M8.66667 2.16666V6.49999M3.25 10.8333H22.75M5.41667 4.33332H20.5833C21.78 4.33332 22.75 5.30337 22.75 6.49999V21.6667C22.75 22.8633 21.78 23.8333 20.5833 23.8333H5.41667C4.22005 23.8333 3.25 22.8633 3.25 21.6667V6.49999C3.25 5.30337 4.22005 4.33332 5.41667 4.33332Z"
        stroke="#D2AC71"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CalendarIcon;
