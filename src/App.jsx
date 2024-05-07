import Eventpage from "./pages/eventpage/Eventpage"
import Frontpage from "./pages/frontpage/Frontpage"
import EventinfoPage from "./pages/eventinfopage/Eventinfopage"
import Nav from "./components/nav/Nav"
import {Routes, Route} from "react-router-dom"

function App() {

  return (
      <>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/events" element={<Eventpage />} />
          <Route path="/eventinfo" element={<EventinfoPage />} />
        </Routes>
        <Nav />
      </>
  )
}

export default App
