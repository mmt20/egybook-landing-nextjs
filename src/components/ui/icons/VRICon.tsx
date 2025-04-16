interface IProps {
  className?: string;
  style?: React.CSSProperties;
}

const VRICon = ({ className, style }: IProps) => {
  return (
    <svg
      width="62"
      height="50"
      viewBox="0 0 62 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <g clipPath="url(#clip0_1_452)">
        <path
          d="M9.69452 0H52.3061C54.9583 0 57.3743 1.09848 59.1301 2.84642C60.9001 4.60797 62 7.03476 62 9.66835V40.3317C62 42.9593 60.889 45.3809 59.1221 47.1379C57.3573 48.895 54.9333 50 52.3061 50H9.69452C7.06146 50 4.62954 48.9062 2.86205 47.1459C1.1045 45.3973 0 42.9856 0 40.3317V9.66835C0 7.00921 1.09323 4.59098 2.85418 2.83858C4.61379 1.08728 7.03567 0 9.69452 0ZM19.2687 16.3496L22.8338 28.5482H22.9694L26.5345 16.3496H31.8646L26.128 33.6504H19.6785L13.9386 16.3496H19.2687ZM33.5295 33.6504V16.3496H41.0342C42.3248 16.3496 43.4523 16.5833 44.4206 17.0514C45.3881 17.5189 46.1413 18.193 46.6795 19.069C47.2168 19.9488 47.4839 21.0035 47.4839 22.2289C47.4839 23.4695 47.2089 24.5123 46.6551 25.3647C46.1058 26.2131 45.3329 26.8553 44.3409 27.2912C43.345 27.7234 42.1893 27.9413 40.8632 27.9413H36.3816V24.2904H39.9154C40.4686 24.2904 40.9428 24.2229 41.3329 24.0842C41.7276 23.9454 42.0302 23.7235 42.2413 23.4224C42.4564 23.1166 42.5603 22.7206 42.5603 22.2289C42.5603 21.7334 42.4564 21.3288 42.2413 21.0198C42.0302 20.7062 41.7276 20.4725 41.3329 20.3259C40.9428 20.1753 40.4686 20.1 39.9154 20.1H38.2499V33.6504H33.5295ZM43.7155 25.7097L48.0614 33.6504H42.9346L38.6919 25.7097H43.7155ZM52.3061 4.01685H9.69452C8.11982 4.01685 6.69237 4.65388 5.66295 5.67837C4.63414 6.70214 3.99537 8.11492 3.99537 9.66835V40.3317C3.99537 41.8753 4.64201 43.2828 5.67082 44.306C6.70944 45.3403 8.1415 45.9831 9.69452 45.9831H52.3061C53.8493 45.9831 55.2747 45.3325 56.3133 44.2981C57.3513 43.2658 58.0046 41.8537 58.0046 40.3317V9.66835C58.0046 8.13649 57.3592 6.71925 56.3213 5.68621C55.2919 4.66172 53.8704 4.01685 52.3061 4.01685Z"
          fill="#346D52"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_452">
          <rect width="62" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default VRICon;
