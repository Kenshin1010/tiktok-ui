import { IconProps } from "../../../assets/icons-tsx/IconProps";

function ExploreActiveIcon({
  width = "3.2rem",
  height = "3.2rem",
  className,
}: IconProps) {
  return (
    <svg
      fill="currentColor"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 40.5a16.5 16.5 0 1 0 0-33 16.5 16.5 0 0 0 0 33Zm4.43-14.54c-.12.6-.49 1.12-1.01 1.44l-8.88 5.37a.65.65 0 0 1-.98-.69l2.01-10.18c.12-.6.49-1.12 1.01-1.44l8.88-5.37a.65.65 0 0 1 .98.69l-2.01 10.18Z"></path>
      <path d="m21.92 26.89 3.4-2.05.76-3.9-3.4 2.06-.76 3.89Z"></path>
    </svg>
  );
}

export default ExploreActiveIcon;
