import './ticket.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Ticket({order}) {

    const [ticketEvents, setTicketEvents] = useState([]);

    useEffect(() => {
        axios.get('https://santosnr6.github.io/Data/events.json')
        .then(response => setTicketEvents(response.data.events))
        .catch(error => console.error(error))
    }, [order.eventId])
    
    const event = ticketEvents.find(event => event.id === order.eventId)
    
    return (
        <article className="ticketContainer">
            <section className="ticketWhat">
                <p className="what">What</p>
                <h1 className="ticketEventName">{event ? event.name : 'Loading event...'}</h1>
            </section>
            <section className="ticketWhere">
                <p className="where">Where</p>
                <p className="location">{event ? event.where : 'Loading'}</p>
            </section>
                <section className="sectionWhen">
                    <p className="when">When</p>
                    <p className="ticketDate">{event ? event.when.date : 'Loading'}</p>
                </section>
                <section className="sectionFrom">
                    <p className="from">From</p>
                    <p className="fromTime">{event ? event.when.from : 'Loading'}</p>
                </section>
                <section className="sectionTo">
                    <p className="to">To</p>
                    <p className="toTime">{event ? event.when.to : 'Loading'}</p>
                </section>
            <section className="ticketInformation">
                <p className="information">Info</p>
                <p className="ticketSeat">{order.section} - {order.seat}</p>
            </section>
            <section className="ticketId">
                <p className="ticketBarcode">{order.orderId}</p>
                <p className="ticketNumber">#{order.orderId}</p>
            </section>
        </article>
    )
}

export default Ticket
