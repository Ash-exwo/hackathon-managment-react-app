import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddTeam from "./components/AddTeam"
import ViewTeam from "./components/ViewTeam"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/add-team" element={<AddTeam/>}/>
      <Route path="/view-team" element={<ViewTeam/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
