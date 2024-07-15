import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Posts } from './pages/Posts'
import { SpecificPost } from './pages/SpecificPost'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Posts />} />
        <Route path="/:postID" element={<SpecificPost />} />
      </Route>
    </Routes>
  )
}
