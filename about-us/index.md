---
layout: default
title: About 랩실막내들
---

<section class="archive-hero">
  <div class="shell">
    <p class="eyebrow">LAB ROOKIES</p>
    <h1>About Us</h1>
    <p class="archive-intro">숙명여자대학교에서 함께 공부하고 SWING 2026을 기록한 네 명의 팀원입니다.</p>
  </div>
</section>

<section>
  <div class="shell">
    <div class="notice"><strong>교체 안내:</strong> 아직 이름·실제 사진·LinkedIn URL이 제공되지 않아 임시값으로 넣었습니다. <code>_data/team.yml</code>과 <code>assets/images/team/</code>만 바꾸면 이 페이지는 자동으로 갱신됩니다.</div>

    <div class="team-grid">
      {% for member in site.data.team %}
      <article class="team-card">
        <img src="{{ member.image | relative_url }}" alt="{{ member.name }} 프로필 사진">
        <div class="team-card-body">
          <h2>{{ member.name }}</h2>
          <p class="team-meta">{{ member.school }}</p>
          <p class="team-meta">{{ member.major }}</p>
          <a class="linkedin" href="{{ member.linkedin }}" {% if member.linkedin != '#' %}target="_blank" rel="noopener noreferrer"{% endif %}>LinkedIn ↗</a>
        </div>
      </article>
      {% endfor %}
    </div>
  </div>
</section>
