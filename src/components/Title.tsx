type TitleProps = {
  number: string;
  text: string;
  className?: string
}

export default function Title({ number, text, className}: TitleProps) {
  return (
    <h1 className={`${className} text-preset-5`}>
      <span className="page__number">{number}</span>{` ${text}`}
    </h1>
  );
}
