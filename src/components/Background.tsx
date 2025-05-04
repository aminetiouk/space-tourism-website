export default function Background({ children, page }) {
  return <div className={`background background--${page}`}>{children}</div>;
}
