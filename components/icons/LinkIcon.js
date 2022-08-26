export default function LinkIcon({ title, href, svg }) {
  return (
    <a title={title} href={href}>
      {svg}
    </a>
  );
}
