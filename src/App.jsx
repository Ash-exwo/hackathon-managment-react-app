import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddTeam from "./components/AddTeam"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/add-team" element={<AddTeam/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
