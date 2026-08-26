import { Navigate, useParams } from 'react-router-dom'
import ArticleHeader from '../components/ArticleHeader'
import MarkdownArticle from '../components/MarkdownArticle'
import { interviews } from '../data/archive'

export default function InterviewDetail() {
  const { slug } = useParams()
  const item = interviews.find((entry) => entry.slug === slug)

  if (!item) return <Navigate to="/interviews" replace />

  return (
    <div className="article-page">
      <ArticleHeader
        backTo="/interviews"
        backLabel="Interview Archive"
        eyebrow={`${item.company} · ${item.role}`}
        title={item.title}
        summary={item.summary}
        image={item.image ? `${import.meta.env.BASE_URL}${item.image}` : undefined}
        imageAlt={`${item.company} ${item.role} 인터뷰이`}
        imageCaption={item.displayName}
      />
      <MarkdownArticle content={item.content} />
    </div>
  )
}
