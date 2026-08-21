import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ArchiveCard({ to, index, kicker, title, summary, accent = 'pink' }) {
  return (
    <Link className={`archive-card accent-${accent}`} to={to}>
      <div className="archive-card-topline">
        <span className="archive-index">{String(index).padStart(2, '0')}</span>
        <span className="archive-kicker">{kicker}</span>
        <ArrowUpRight className="archive-arrow" size={20} />
      </div>
      <h2>{title}</h2>
      <p>{summary}</p>
      <span className="archive-read-more">Read archive</span>
    </Link>
  )
}
