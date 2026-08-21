import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <Link className="button button-primary" to="/">메인으로 돌아가기</Link>
    </section>
  )
}
