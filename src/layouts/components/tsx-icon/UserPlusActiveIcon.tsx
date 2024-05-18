import { IconProps } from "../../../assets/icons-tsx/IconProps";

function UserPlusActiveIcon({
  width = "2.6rem",
  height = "2.6rem",
  className,
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m17.851 21.44-1.94-1.94H22.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-6.59l1.94-1.94a.5.5 0 0 0 0-.706l-.707-.708a.5.5 0 0 0-.707 0l-3.649 3.647a1 1 0 0 0 0 1.414l3.648 3.647a.5.5 0 0 0 .708 0l.707-.708a.5.5 0 0 0 0-.707M4.5 7c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5"></path>
      <path d="M1 20.72c0-3.26 3.03-7.22 8.5-7.22 1.589 0 2.971.334 4.134.888l-2.03 1.952a3 3 0 0 0-.004 4.321l1.906 1.839H5.5c-3.5 0-4.5 0-4.5-1.78"></path>
    </svg>
  );
}

export default UserPlusActiveIcon;
