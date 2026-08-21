import PageHero from '../components/PageHero'
import ArchiveCard from '../components/ArchiveCard'
import { interviews } from '../data/archive'

const accents = ['pink', 'purple', 'sky', 'blue']

export default function InterviewArchive() {
  return (
    <>
      <PageHero
        eyebrow="PEOPLE WE MET"
        title="Interview Archive"
        description="실리콘밸리에서 만난 연구자, 엔지니어, 정책 전문가, 창업가의 이야기를 직무별 아카이브로 정리했습니다."
      />

      <section className="archive-grid">
        {interviews.map((item, index) => (
          <ArchiveCard
            key={item.slug}
            to={`/interviews/${item.slug}`}
            index={index + 1}
            kicker={item.company}
            title={item.role}
            summary={item.summary}
            accent={accents[index % accents.length]}
          />
        ))}
      </section>
    </>
  )
}
