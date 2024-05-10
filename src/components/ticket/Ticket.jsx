import './ticket.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Ticket({order}) {

    const [ticketEvents, setTicketEvents] = useState([]);

    useEffect(() => {
        axios.get('https://santosnr6.github.io/Data/events.json')
        .then(response => setTicketEvents(response.data.events))
        .catch(error => console.error(error))
    }, [])
    
    console.log(order)
    return (
        <article className="ticketContainer">
            <section className="ticketWhat">
                <p className="what">What</p>
                <h1 className="ticketEventName">Event</h1>
            </section>
            <section className="ticketWhere">
                <p className="where">Where</p>
                <p className="location">Location</p>
            </section>
                <section className="sectionWhen">
                    <p className="when">When</p>
                    <p className="ticketDate">Date</p>
                </section>
                <section className="sectionFrom">
                    <p className="from">From</p>
                    <p className="fromTime">04:00</p>
                </section>
                <section className="sectionTo">
                    <p className="to">To</p>
                    <p className="toTime">06:00</p>
                </section>
            <section className="ticketInformation">
                <p className="information">Info</p>
                <p className="ticketSeat">{order.section} - {order.seat}</p>
            </section>
            <section className="ticketId">
                <p className="ticketBarcode">1241B</p>
                <p className="ticketNumber">#A7261</p>
            </section>
        </article>
    )
}

export default Ticket
