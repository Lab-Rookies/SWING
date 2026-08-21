export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {description && <p className="page-hero-description">{description}</p>}
    </section>
  )
}
