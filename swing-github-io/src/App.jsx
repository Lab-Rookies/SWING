import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutSwing from './pages/AboutSwing'
import Team from './pages/Team'
import InterviewArchive from './pages/InterviewArchive'
import InterviewDetail from './pages/InterviewDetail'
import SummitArchive from './pages/SummitArchive'
import SummitDetail from './pages/SummitDetail'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-swing" element={<AboutSwing />} />
        <Route path="team" element={<Team />} />
        <Route path="interviews" element={<InterviewArchive />} />
        <Route path="interviews/:slug" element={<InterviewDetail />} />
        <Route path="summit" element={<SummitArchive />} />
        <Route path="summit/:slug" element={<SummitDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
