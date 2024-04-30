import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/home/Home"
import Students from "./components/pages/developer/database/Students"



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/database" element={<Students/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
