interface Props {
  to: string;
  label: string;
  icon: any;
  color?: string;
  size?: number;
}

const ICON_SIZE = 1;
const ICON_COLOR = "#ffffff";

export default function SocialLink({
  to,
  label,
  icon,
  color = ICON_COLOR,
  size = ICON_SIZE,
}: Props) {
  return (
    <a
      href={to}
      target="_blank"
      class="inline-flex items-center bg-sky-800 hover:bg-sky-700 text-white hover:text-white font-bold py-2 px-4 my-2 mx-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
