type Props = {
  number: string;
  title: string;
  description: string;
  items: string[];
  href: string;
};

export function ServiceCard({ number, title, description, items, href }: Props) {
  return (
    <article className="service-card">
      <div className="service-top">
        <span>{number}</span>
        <a href={href} aria-label={`Learn more about ${title}`}>↗</a>
      </div>
      <h3>{title}</h3>
      <p className="service-description">{description}</p>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}