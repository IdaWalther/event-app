import './eventinfopage.css'
import { useParams } from 'react-router-dom'
import useTicketStore from '../../stores/ticket-store'
import { useEffect } from 'react'

function Eventinfopage() {
  const { id } = useParams()
  const { events, isFetching, setEvents, setIsFetching }  = useTicketStore(state => ({
    events: state.events,
    isFetching: state.isFetching,
    setEvents: state.setEvents,
    setIsFetching: state.setIsFetching
  }))

  useEffect(() => {
    setIsFetching(true);
      fetch('https://santosnr6.github.io/Data/events.json')
      .then(response => response.json())
      .then(data => {
        setEvents(data.events)
        setIsFetching(false)
      })
      .catch(error => {
        console.log('Error fetching events:', error)
      })
  }, [setEvents, setIsFetching])
  console.log(id);
  console.log(events)
  console.log(events[0])
  console.log(typeof events[0])
  if (isFetching) {
    return <h1 className="loading">Loading...</h1>;
  }
  const event = events.find(event => event.id === id)
  console.log(event);


  if (!event) {
      return <p>No event data available.</p>;
    }

  return (
        <section className="eventInfoPage">
        <section className="topSection">
          <h1 className="eventInfoPageTitle">Events</h1>
          <p className="paragraphScoreTickets">You are about to score some tickets to</p>
        </section>

        <section className="topMiddleSection">
          <h2 className="eventInfoPageHeader">{event.name}</h2>
          <p className="paragraphEventInfoDate">{event.when.date} kl {event.when.from} - {event.when.to} </p>
          <p className="eventInfoPageEventInfoLocation">{event.where}</p>
        </section>

        <section className="addTicketsContainer">
          <section className="addTicketsPrice">
            <p className="eventInfoPrice">{event.price}</p>
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
