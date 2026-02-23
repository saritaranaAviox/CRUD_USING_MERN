import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Dashboard from './pages/Dashboard'
import AppRoutes from './routes/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LoginPage/>
      <SignupPage/>
      <Dashboard/> */}
      <AppRoutes/>

    </>
  )
}

export default App
