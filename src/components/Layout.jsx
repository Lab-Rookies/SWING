import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'

const navItems = [
  ['About SWING', '/about-swing'],
  ['About 랩실막내들', '/team'],
  ['Interview Archive', '/interviews'],
  ['Agentic AI Summit', '/summit'],
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('swing-theme')
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme
    return 'dark'
  })
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('swing-theme', theme)

    const themeColor = document.querySelector('meta[name="theme-color"]')
    themeColor?.setAttribute('content', theme === 'dark' ? '#23283e' : '#fcfcfc')
  }, [theme])

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="랩실막내들 홈">
          <span className="brand-copy">
            <strong>랩실막내들</strong>
            <small>SWING Archive</small>
          </span>
        </Link>

        <div className="header-actions">
          <nav className="desktop-nav" aria-label="주요 메뉴">
            {navItems.map(([label, href]) => (
              <NavLink
                key={href}
                to={href}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            className="theme-button"
            type="button"
            onClick={() => setTheme((value) => (value === 'light' ? 'dark' : 'light'))}
            aria-label={theme === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}
            aria-pressed={theme === 'dark'}
            title={theme === 'light' ? 'Dark mode' : 'Light mode'}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            className="menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {open && (
        <nav className="mobile-nav" aria-label="모바일 메뉴">
          {navItems.map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}

      <main className="page-wrap">
        <Outlet />
      </main>

      <footer className="site-footer">
        <span>2026 SWING · Silicon Valley Archive</span>
        <span>숙명여자대학교 랩실막내들</span>
      </footer>
    </div>
  )
}
