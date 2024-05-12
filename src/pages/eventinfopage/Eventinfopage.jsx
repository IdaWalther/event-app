import './eventinfopage.css'
import { useParams } from 'react-router-dom'
import useTicketStore from '../../stores/ticket-store'
import { useEffect } from 'react'
import Eventheader from '../../components/eventheader/Eventheader'
import Eventdetails from '../../components/eventdetails/Eventdetails'
import Eventbuyticket from '../../components/eventbuyticket/Eventbuyticket'
import Eventticketbox from '../../components/eventticketbox/Eventticketbox'

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

  if (isFetching) {
    return <h1 className="loading">Loading...</h1>;
  }
  const event = events.find(event => event.id === id)

  if (!event) {
      return <p className="loading">No event data available.</p>;
    }

  return (
      <article className="eventInfoPage">
        <Eventheader />
        <Eventdetails event={event} />
        <Eventticketbox event={event} />
        <Eventbuyticket event={event}/>
      </article>
  )
}

export default Eventinfopage
