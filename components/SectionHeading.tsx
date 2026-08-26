type Props = {
  kicker: string;
  title: string;
  body: string;
  id: string;
};

export function SectionHeading({ kicker, title, body, id }: Props) {
  return (
    <div className="section-heading">
      <div className="eyebrow"><span className="eyebrow-mark" /> {kicker}</div>
      <div>
        <h2 id={id}>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
}