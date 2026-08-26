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

function formatXaiTakeaways(text) {
  const compact = [
    '먼저 내가 정말 좋아하는 것을 찾을 것.',
    '짧은 시간 안에 재능을 판단하지 말 것.',
    '좋아한다면 충분히 많은 시간을 투자할 것.',
    '변화가 빠른 분야라면 매일 변화에 노출될 것.',
    '그리고 아이디어를 반드시 실제 결과로 연결할 것.',
  ].join('')

  const withLineBreaks = compact.replaceAll('것.', '것.  \n').trimEnd()
  return text.replace(compact, withLineBreaks)
}

function prepareArticle(text) {
  const content = formatXaiTakeaways(removeSourceTitle(text))
  const lines = content.split('\n')
  let aboutIndex = lines.findIndex((line) => /^#\s+About\s*$/.test(line.trim()))

  if (aboutIndex === -1) return { content, aboutStart: -1, introEnd: -1 }

  // Some source entries repeat the interviewee's role between the page header
  // and About. The page header already shows it, so always begin the article
  // at About.
  if (aboutIndex > 0) {
    lines.splice(0, aboutIndex)
    aboutIndex = 0
  }

  const dividerIndex = lines.findIndex(
    (line, index) => index > aboutIndex && /^\s*---+\s*$/.test(line),
  )
  const introEndIndex = dividerIndex === -1 ? lines.length : dividerIndex
  const aboutIntroIndex = lines.findIndex(
    (line, index) => index > aboutIndex
      && index < introEndIndex
      && /^\s*한줄\s*(?:소개|멘트)\s*[:：]/.test(line),
  )

  if (aboutIntroIndex !== -1) {
    lines[aboutIntroIndex] = ''
  }

  // A few source entries omit the space after `#`. Normalize only the About
  // highlights so all ten interview pages render them consistently.
  for (let index = aboutIndex + 1; index < introEndIndex; index += 1) {
    lines[index] = lines[index].replace(/^#(?!#|\s)/, '# ')
  }

  const normalizedContent = lines.join('\n')
  const aboutStart = lines.slice(0, aboutIndex).join('\n').length + (aboutIndex > 0 ? 1 : 0)
  const introEnd = dividerIndex === -1
    ? normalizedContent.length
    : lines.slice(0, dividerIndex).join('\n').length

  return { content: normalizedContent, aboutStart, introEnd }
}

function restoreLiteralStrong() {
  return (tree) => {
    function transformChildren(parent) {
      if (!Array.isArray(parent.children)) return

      parent.children = parent.children.flatMap((child) => {
        if (child.type !== 'text' || !child.value.includes('**')) {
          transformChildren(child)
          return child
        }

        const children = []
        const pattern = /\*\*(.+?)\*\*/g
        let lastIndex = 0
        let match

        while ((match = pattern.exec(child.value)) !== null) {
          if (match.index > lastIndex) {
            children.push({ type: 'text', value: child.value.slice(lastIndex, match.index) })
          }

          children.push({
            type: 'strong',
            children: [{ type: 'text', value: match[1] }],
          })
          lastIndex = pattern.lastIndex
        }

        if (lastIndex === 0) return child
        if (lastIndex < child.value.length) {
          children.push({ type: 'text', value: child.value.slice(lastIndex) })
        }

        return children
      })
    }

    transformChildren(tree)
  }
}

export default function MarkdownArticle({ content }) {
  const prepared = prepareArticle(content)

  return (
    <article className="markdown-article">
      <ReactMarkdown
        remarkPlugins={[restoreLiteralStrong]}
        components={{
          h1: ({ children, node }) => {
            const isAboutHighlight = prepared.introEnd !== -1
              && node.position?.start.offset > prepared.aboutStart
              && node.position?.start.offset < prepared.introEnd

            if (isAboutHighlight) {
              return (
                <h2 className="about-highlight">
                  <span aria-hidden="true">#</span>
                  {children}
                </h2>
              )
            }

            return <h2 className="article-h1">{children}</h2>
          },
          h2: ({ children }) => <h2>{children}</h2>,
          h3: ({ children }) => <h3>{children}</h3>,
          h4: ({ children }) => <h4>{children}</h4>,
          hr: () => <hr className="article-divider" />,
        }}
      >
        {prepared.content}
      </ReactMarkdown>
    </article>
  )
}
