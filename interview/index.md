---
layout: default
title: Interview Archive
---

<section class="archive-hero">
  <div class="shell">
    <p class="eyebrow">SILICON VALLEY CONVERSATIONS</p>
    <h1>Interview<br>Archive</h1>
    <p class="archive-intro">실리콘밸리에서 만난 10명의 연구자, 엔지니어, 창업가와 나눈 이야기를 기록했습니다.</p>
  </div>
</section>

<section>
  <div class="shell card-grid">
    {% for interview in site.data.interviews %}
    <a class="archive-card" href="{{ interview.url | relative_url }}">
      <div class="archive-card-image">
        <img src="{{ interview.image | relative_url }}" alt="{{ interview.intro }} 인터뷰 이미지">
      </div>
      <div class="archive-card-body">
        <span class="card-number">{{ interview.number }}</span>
        <h2>{{ interview.intro }}</h2>
        <p>{{ interview.deck }}</p>
        <span class="card-arrow">Read Interview →</span>
      </div>
    </a>
    {% endfor %}
  </div>
</section>
