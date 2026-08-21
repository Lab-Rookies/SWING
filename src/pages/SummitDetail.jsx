import { Navigate, useParams } from 'react-router-dom'
import ArticleHeader from '../components/ArticleHeader'
import MarkdownArticle from '../components/MarkdownArticle'
import { summitSessions } from '../data/archive'

export default function SummitDetail() {
  const { slug } = useParams()
  const item = summitSessions.find((entry) => entry.slug === slug)

  if (!item) return <Navigate to="/summit" replace />

  return (
    <div className="article-page">
      <ArticleHeader
        backTo="/summit"
        backLabel="Agentic AI Summit Archive"
        eyebrow={item.tag}
        title={item.title}
        summary={item.summary}
      />
      <MarkdownArticle content={item.content} />
    </div>
  )
}
