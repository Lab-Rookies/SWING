import { Linkedin } from 'lucide-react'
import PageHero from '../components/PageHero'
import { members } from '../data/members'
import { useState } from 'react'

function MemberAvatar({ member }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`member-avatar-ring avatar-${member.accent}`}>
      <div className="member-avatar-inner">
        {!failed ? (
          <img
            src={member.image}
            alt={`${member.name} 프로필`}
            onError={() => setFailed(true)}
          />
        ) : (
          <span>{member.initials}</span>
        )}
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT THE TEAM"
        title="About 랩실막내들"
        description="숙명여자대학교 소프트웨어학부에서 함께 연구하고, 함께 실리콘밸리를 경험한 네 명의 팀원입니다."
      />

      <section className="team-grid">
        {members.map((member) => (
          <article className="member-card" key={member.name}>
            <MemberAvatar member={member} />
            <p className={`member-position text-${member.accent}`}>SWING 2026</p>
            <h2>{member.name}</h2>
            <p className="member-school">{member.school}</p>
            <p className="member-major">{member.major}</p>
            <a
              className="linkedin-button"
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} LinkedIn 새 창에서 열기`}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </article>
        ))}
      </section>

      <p className="photo-note">
        팀원 사진은 <code>public/members</code> 폴더에 지정된 파일명으로 넣으면 자동으로 표시됩니다.
      </p>
    </>
  )
}
