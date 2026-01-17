export default function SocialIcon({ href, Icon, hoverColor, color }) {
  return (
    <a
      className={`inline-block ${color} hover:${hoverColor} transition-all duration-500 hover:scale-125`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon />
    </a>
  );
}
