# SWING Archive — 랩실막내들

2026 SWING Silicon Valley 경험을 정리하기 위한 React + Vite 기반 GitHub Pages 사이트입니다.

## 특징

- 메인 / About SWING / About 랩실막내들 / Interview Archive / Agentic AI Summit Archive를 **서로 다른 라우트**로 구성
- Interview 10개, Summit 4개의 상세 페이지 제공
- 업로드된 `.txt` 원문은 `src/data/archive.js`에 **전체 텍스트가 직접 포함**되어 있어 런타임에 별도 txt 파일을 읽지 않음
- GitHub Pages에서 새로고침 404 문제를 피하기 위해 `HashRouter` 사용
- 반응형 모바일 메뉴 포함
- 팀원 사진이 없을 때는 이니셜 placeholder 자동 표시

## 페이지 구조

```text
/#/
├── /about-swing
├── /team
├── /interviews
│   ├── /apple-data-engineer
│   ├── /apple-data-scientist
│   ├── /discord-ai-safety-policy-expert
│   ├── /google-deepmind-ml-engineer
│   ├── /google-soc-engineer
│   ├── /meta-software-engineer
│   ├── /stanford-bioe-researcher
│   ├── /xai-ai-engineer
│   ├── /silicon-valley-12yr-ceo
│   └── /silicon-valley-startup-ceo
└── /summit
    ├── /ai-agent-future
    ├── /ai-safety
    ├── /ai-infra-hw
    └── /ai-software
```

실제 URL은 HashRouter 때문에 예를 들어 다음처럼 표시됩니다.

```text
https://USERNAME.github.io/REPOSITORY/#/interviews/apple-data-engineer
```

## 실행

```bash
npm install
npm run dev
```

## 팀원 사진 넣기

`public/members/`에 아래 파일명을 그대로 사용해 사진을 넣으면 됩니다.

```text
sojeong.jpg
jiu.jpg
subin.jpg
yeyoung.jpg
```

이미지가 없거나 파일명이 틀리면 자동으로 이니셜 placeholder가 표시됩니다.

## GitHub Pages 배포

1. GitHub에 새 repository를 만들고 이 프로젝트 파일 전체를 push합니다.
2. 처음 한 번 의존성을 설치합니다.

```bash
npm install
```

3. 배포합니다.

```bash
npm run deploy
```

4. GitHub repository → **Settings → Pages**에서 배포 branch가 `gh-pages`로 설정되어 있는지 확인합니다.

`vite.config.js`의 `base: './'` 설정 때문에 사용자 사이트(`USERNAME.github.io`)와 프로젝트 사이트(`USERNAME.github.io/REPOSITORY`) 모두에서 상대 경로로 asset을 불러오도록 구성되어 있습니다.

## 주요 수정 위치

- 전체 디자인: `src/styles.css`
- 메뉴/공통 레이아웃: `src/components/Layout.jsx`
- 메인: `src/pages/Home.jsx`
- SWING 설명: `src/pages/AboutSwing.jsx`
- 팀원 정보: `src/data/members.js`
- Interview/Summit 전체 본문: `src/data/archive.js`

## 참고

디자인은 Cleanfolio의 미니멀한 React portfolio 방향을 참고하되, 카드형 archive와 원형 프로필, 별도 라우팅 구조로 새롭게 구성했습니다.
