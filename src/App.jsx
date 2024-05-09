import Eventpage from "./pages/eventpage/Eventpage"
import Frontpage from "./pages/frontpage/Frontpage"
import OrderPage from "./pages/orderpage/Orderpage"
import TicketPage from "./pages/ticketpage/Ticketpage"
import EventinfoPage from "./pages/eventinfopage/Eventinfopage"
import {Routes, Route} from "react-router-dom"
import Nav from "./components/nav/Nav"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Frontpage />}/> 
        <Route path="/events" element={<Eventpage />} />
        <Route path="/:id" element={<EventinfoPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/tickets" element={<TicketPage />} />
      </Routes>
      <Nav />
    </>
  )
}

export default App
