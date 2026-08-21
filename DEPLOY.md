# SWING GitHub Pages 배포

이 패키지는 `Lab-Rookies/SWING` 저장소와
`https://lab-rookies.github.io/SWING/` 주소를 기준으로 설정되어 있습니다.

## 업로드

ZIP 안의 **내용물 전체**를 저장소 루트에 덮어쓴 뒤:

```bash
git add -A
git commit -m "Fix GitHub Pages build"
git push origin main
```

## GitHub 설정

Repository → Settings → Pages

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/(root)`

## 반드시 루트에 있어야 하는 파일

- `_config.yml`
- `index.md`
- `404.html`
- `_layouts/`
- `_includes/`
- `assets/`

## 배포 확인

push 뒤 Repository → Actions에서 `pages build and deployment`가
초록색 체크로 완료되는지 확인하세요.

배포 주소:

`https://lab-rookies.github.io/SWING/`

## 이번 수정 사항

- 잘못 들어가 있던 파일 첫 줄의 `\` 문자 제거
- `_layouts/default.html`에 정상 Jekyll front matter 추가
- `index.md`에 `permalink: /` 명시
- `404.html` front matter 정상화
- 모든 Markdown/HTML front matter YAML 검사
- `_data` YAML 파일 파싱 검사
