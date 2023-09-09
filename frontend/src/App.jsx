import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Error from './components/Error'
import Success from './components/Success'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/error?' element={<Error />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
