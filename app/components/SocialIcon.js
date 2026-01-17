export default function SocialIcon({
  href,
  Icon,
  hoverColor,
  color,
  sizeClass,
  name,
}) {
  const iconSize = sizeClass || "text-4xl sm:text-5xl";
  const label = name || href;
  return (
    <a
      className={`inline-flex items-center justify-center p-2 ${color} hover:${hoverColor} transition-all duration-300 hover:scale-110 rounded-md`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      <Icon className={iconSize} />
    </a>
  );
}
