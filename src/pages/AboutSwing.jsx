import PageHero from '../components/PageHero'

export default function AboutSwing() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT THE PROGRAM"
        title="About SWING"
        description="SoftWare for International Network and Growth"
      />

      <section className="prose-page about-swing-page">
        <div className="prose-lead">
          <span className="large-initial">S</span>
          <p>
            <strong>SWING</strong> (<strong>S</strong>oft<strong>W</strong>are for <strong>I</strong>nternational <strong>N</strong>etwork and <strong>G</strong>rowth)은 숙명여자대학교 SW중심대학사업단에서 운영하는 글로벌 해외 프로그램으로, 학생들이 세계적인 기술 혁신의 중심지인 <strong>실리콘밸리</strong>를 직접 경험하며 글로벌 SW 역량과 진로 방향성을 확장할 수 있도록 마련된 프로그램입니다.
          </p>
        </div>

        <div className="prose-columns">
          <div>
            <h2>2026 Theme</h2>
            <p>
              2026 SWING은 <strong>“에이전틱 AI와 바이브코딩이 변화시키는 미래”</strong>를 주제로, 참가 학생들은 실리콘밸리의 AI·SW 산업 현장을 방문하고 현지의 연구자 및 현직자들과 교류하며 빠르게 변화하는 최신 기술과 산업 문화를 직접 탐색합니다.
            </p>
            <p>
              특히 SWING은 정해진 일정에 따라 기업을 견학하는 일반적인 해외 탐방과 달리, <strong>학생들이 팀별 목표에 맞추어 활동을 직접 기획하고 수행하는 자기주도형 프로그램</strong>입니다. 각 팀은 관심 분야와 진로 목표를 바탕으로 AI·SW 기업 방문, 현직자 인터뷰, 기술 및 서비스 체험 등의 일정을 구성하고 실제 현장에서 이를 수행합니다.
            </p>
          </div>
          <div>
            <h2>How it works</h2>
            <p>
              프로그램은 크게 <strong>실리콘밸리 주요 기관을 방문하는 현장체험활동, 팀별로 기획한 자율 활동, 그리고 현지 AI·SW 기술과 문화를 경험하는 문화체험활동</strong>으로 구성됩니다. 또한 매일 활동을 마친 뒤 경험과 성과를 공유하며, 단순한 방문을 넘어 현장에서 얻은 인사이트를 정리하고 팀의 목표와 연결하는 과정을 거칩니다.
            </p>
            <p>
              이를 통해 참가자는 실리콘밸리의 <strong>최신 기술 트렌드와 혁신 문화</strong>, <strong>글로벌 IT 산업에서 요구되는 역량</strong>, <strong>스타트업 및 기술 생태계의 흐름</strong>을 직접 경험하고, 다양한 전문가와의 네트워킹을 통해 향후 연구와 진로를 구체화할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="timeline-card">
          <span className="timeline-year">2024</span>
          <div>
            <h2>첫 번째 SWING</h2>
            <p>
              SWING 프로그램은 <strong>2024년 처음 시작되어 2024년 2월 5일부터 2월 12일까지 첫 번째 실리콘밸리 프로그램이 운영</strong>되었습니다.
            </p>
          </div>
          <span className="timeline-line" />
          <span className="timeline-year current">2026</span>
          <div>
            <h2>두 번째 SWING · 우리가 다녀온 기록</h2>
            <p>
              이후 2026년 두 번째 SWING 프로그램이 진행되었으며, <strong>저희 팀은 두 번째 SWING 참가팀으로 실리콘밸리를 방문하여 직접 기획한 활동을 수행했습니다.</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
