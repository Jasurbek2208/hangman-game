import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { GlobalStyle } from 'assets/styles/global'
import Hangman from 'pages/Hangman'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Hangman />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
