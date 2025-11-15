import LandingPage from './pages/LandingPage'
import TypeCoveragePage from './pages/TypeCoveragePage'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="calculator">
          <Route path="type-coverage" element={<TypeCoveragePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
