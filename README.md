# SWING Archive

랩실막내들의 SWING 2026 GitHub Pages 사이트입니다.

## 사이트 구성

- `/` — 메인
- `/about-swing/` — About SWING
- `/about-us/` — About 랩실막내들
- `/interview/` — Interview Archive
- `/interview/.../` — 개별 인터뷰 10개
- `/summit/` — Agentic AI Summit Archive (#1~#4 통합)

총 **15개의 콘텐츠 페이지**입니다.

## 1. GitHub Pages 설정

이 저장소 이름이 `SWING`이고 주소가 `https://lab-rookies.github.io/SWING/`인 것을 기준으로 `_config.yml`이 설정되어 있습니다.

GitHub에서:

1. `Settings`
2. `Pages`
3. `Build and deployment`
4. `Source` → `Deploy from a branch`
5. Branch → `main`
6. Folder → `/(root)`
7. `Save`

## 2. 가장 빠른 업로드 방법

기존 `SWING` 저장소를 컴퓨터에 clone한 뒤 이 ZIP의 내용물을 저장소 루트에 복사하고 다음을 실행합니다.

```bash
git clone https://github.com/Lab-Rookies/SWING.git
cd SWING

# ZIP을 푼 뒤, SWING-site 폴더 안의 모든 내용을 이 폴더에 복사

git add .
git commit -m "Build SWING archive website"
git push origin main
```

기존 `test.html`은 필요 없으므로 삭제해도 됩니다.

## 3. 팀원 정보 바꾸기

`_data/team.yml`을 수정하면 됩니다.

```yml
- name: "홍길동"
  school: "숙명여자대학교"
  major: "소프트웨어학부"
  linkedin: "https://www.linkedin.com/in/..."
  image: "/assets/images/team/member-1.jpg"
```

그리고 `assets/images/team/`에 실제 사진을 넣으세요.

## 4. 인터뷰 사진 바꾸기

현재 인터뷰 사진은 모두 SVG 임시 이미지입니다.

`assets/images/interviews/`에서 동일한 이름의 SVG 대신 JPG/PNG를 넣고,
`_data/interviews.yml`과 각 인터뷰의 `index.md`에 있는 `image:` 경로만 수정하면 됩니다.

예:

```yml
image: "/assets/images/interviews/meta-software-engineer.jpg"
```

## 5. 디자인

첨부된 포트폴리오 예시의 분위기를 참고해 다음 요소를 구현했습니다.

- 다크 네이비 배경
- 블루/라벤더 그라데이션 헤드라인
- 넓은 여백과 중앙 정렬 Hero
- 미니멀한 상단 네비게이션
- Light / Dark 테마 토글
- 모바일 반응형 레이아웃

디자인은 `assets/css/style.css` 한 파일에서 대부분 수정할 수 있습니다.

## 6. 저장소 이름이 바뀌는 경우

`_config.yml`의 아래 값을 수정해야 합니다.

```yml
baseurl: "/SWING"
```

예를 들어 저장소 이름이 `swing-archive`로 바뀌면:

```yml
baseurl: "/swing-archive"
```

으로 변경하세요.
