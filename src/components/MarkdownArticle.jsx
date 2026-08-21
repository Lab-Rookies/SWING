import ReactMarkdown from 'react-markdown'

function removeSourceTitle(text) {
  const lines = text.split('\n')
  const firstNonEmptyIndex = lines.findIndex((line) => line.trim().length > 0)
  if (firstNonEmptyIndex === -1) return text

  const firstLine = lines[firstNonEmptyIndex].trim()
  if (firstLine.startsWith('@') || firstLine.startsWith('#1.') || firstLine.startsWith('#2.') || firstLine.startsWith('#3.') || firstLine.startsWith('#4.')) {
    lines.splice(firstNonEmptyIndex, 1)
  }
  return lines.join('\n')
}

export default function MarkdownArticle({ content }) {
  return (
    <article className="markdown-article">
      <ReactMarkdown
        components={{
          h1: ({ children }) => <h2 className="article-h1">{children}</h2>,
          h2: ({ children }) => <h2>{children}</h2>,
          h3: ({ children }) => <h3>{children}</h3>,
          h4: ({ children }) => <h4>{children}</h4>,
          hr: () => <hr className="article-divider" />,
        }}
      >
        {removeSourceTitle(content)}
      </ReactMarkdown>
    </article>
  )
}
