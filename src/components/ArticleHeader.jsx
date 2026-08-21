import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ArticleHeader({ backTo, backLabel, eyebrow, title, summary }) {
  return (
    <header className="article-header">
      <Link className="back-link" to={backTo}>
        <ArrowLeft size={17} />
        {backLabel}
      </Link>
      <div className="article-header-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {summary && <p>{summary}</p>}
      </div>
      <div className="article-gradient-line" aria-hidden="true" />
    </header>
  )
}
