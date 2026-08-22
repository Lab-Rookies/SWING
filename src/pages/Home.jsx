import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home-hero">
      <div className="hero-copy">
        <p className="eyebrow">2026 · SILICON VALLEY · SWING</p>
        <h1>
          Hi, We are
          <br />
          <span>랩실막내들.</span>
        </h1>
        <p className="hero-description">
          숙명여자대학교 소프트웨어학부 소속 학생들로,
          <br className="desktop-break" /> SW중심대학사업단에서 운영한 <strong>SWING 프로그램</strong>에 참여했습니다.
          <br className="desktop-break" /> 실리콘밸리에서 직접 보고, 듣고, 경험한 이야기를 이곳에 기록합니다.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/interviews">
            Interview Archive
          </Link>
          <Link className="button button-ghost" to="/summit">
            Agentic AI Summit
          </Link>
        </div>
      </div>

      <div className="hero-meta" aria-label="아카이브 요약">
        <span className="hero-meta-edition">02</span>
        <p><strong>SWING</strong><small>Silicon Valley · 2026</small></p>
        <ul>
          <li>AI · SW</li>
          <li>10 Interviews</li>
          <li>4 Summit Sessions</li>
        </ul>
      </div>
    </section>
  )
}
