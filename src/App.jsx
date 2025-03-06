import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Resources from './components/Resources'
import "./styles/style.scss";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/html" element={<Resources category={"html"}/>}/>
        <Route path="/css" element={<Resources category={"css"}/>}/>
        <Route path="/javascript" element={<Resources category={"javascript"}/>}/>
        <Route path="/react" element={<Resources category={"react"}/>}/>
        <Route path="/headless-cms" element={<Resources category={"headless-cms"}/>}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App
