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
/**Har fjernet orginalinnholdet som følger med et tomt react prosjekt og byttet ut med Layout og de ulike rutene som skal skrives ut på siden. 
 * Hver av rutene har en path og mappes ut via Resources.jsx med category fra resources.js. Har fått hjelp av medstudent Hanna Sørum fra linje 16 til 26. **/
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
