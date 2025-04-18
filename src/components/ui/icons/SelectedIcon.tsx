interface IProps {
  className?: string;
  style?: React.CSSProperties;
}
const SelectedIcon = ({ className, style }: IProps) => {
  return (
    <svg
      width="48"
      height="50"
      viewBox="0 0 48 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M45.6325 20.3201C48.6407 22.2948 48.6407 26.7052 45.6325 28.6799L4.99385 55.3567C1.66885 57.5393 -2.75 55.1542 -2.75 51.1768V-2.17682C-2.75 -6.1542 1.66884 -8.53935 4.99384 -6.3567L45.6325 20.3201Z"
        fill="#D2AC71"
      />
    </svg>
  );
};

export default SelectedIcon;
