type BackgroundProps = {
  children?: React.ReactNode;
  page: string;
};

export default function Background({ children, page }: BackgroundProps) {
  return <div className={`background background--${page}`}>{children}</div>;
}
