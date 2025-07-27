import { Routes, Route } from "react-router-dom"
import PagesHome from "./pages/HomePage"
import HomePage from "../app/page"

function App() {
  return (
    <Routes>
      <Route path="/Homedir" element={<PagesHome />} />
      <Route path='/' element={<HomePage />} />
       
    </Routes>
  )
}

export default App
