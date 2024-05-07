import './eventinfopage.css'

function Eventinfopage() {
  return (
    <section className="eventInfoPage">
      <section className="topSection">
        <h1 className="eventInfoPageTitle">Event</h1>
        <p className="paragraphScoreTickets">You are about to score some tickets to</p>
      </section>

      <section className="topMiddleSection">
        <h2 className="eventInfoPageHeader">TIAda</h2>
        <p className="paragraphEventInfoDate">Datum</p>
        <p className="eventInfoPageEventInfoLocation">The Event Location</p>
      </section>

      <section className="addTicketsContainer">
        <section className="addTicketsPrice">
          <p className="eventInfoPrice">1000 sek</p>
        </section>
        
        <section className="buttonSubtractContainer">
          <button className="buttonSubtract">-</button>
        </section>
        <section className="eventInfoTicketContainer">
          <p className="ticketCounter">1</p>
        </section>
        <section className="buttonAddContainer">
          <button className="buttonAdd">+</button>
        </section>
      </section>

      <section className="bottomSection">
        <button className="buttonBuyTickets">Buy Tickets</button>
      </section>
    </section>
  )
}

export default Eventinfopage
