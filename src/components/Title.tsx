type TitleProps = {
  number: string;
  text: string;
}

export default function Title({ number, text }: TitleProps) {
  return (
    <h1 className="text-preset-5">
      <span className="page__number">{number}</span>{` ${text}`}
    </h1>
  );
}
