import PageHero from '../components/PageHero'
import ArchiveCard from '../components/ArchiveCard'
import { summitSessions } from '../data/archive'

const accents = ['pink', 'purple', 'sky', 'blue']

export default function SummitArchive() {
  return (
    <>
      <PageHero
        eyebrow="AGENTIC AI SUMMIT"
        title="Agentic AI Summit Archive"
        description="Agentic AI Summit에서 들은 네 개의 세션을 주제별로 정리한 아카이브입니다."
      />

      <section className="archive-grid summit-grid">
        {summitSessions.map((item, index) => (
          <ArchiveCard
            key={item.slug}
            to={`/summit/${item.slug}`}
            index={index + 1}
            kicker={item.tag}
            title={item.title.replace(/^#\d+\.\s*/, '')}
            summary={item.summary}
            accent={accents[index % accents.length]}
          />
        ))}
      </section>
    </>
  )
}
