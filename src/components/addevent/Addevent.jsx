import './addevent.css'
import useTicketStore from '../../stores/ticket-store';

function Addevent({ event}) {

    const { eventTickets, updateTickets } = useTicketStore(state => ({
        eventTickets: state.eventTickets,
        updateTickets: state.updateTickets,
    }))
    const eventId = event.id;
    const currentTicketCount = eventTickets[eventId]?.ticketCount || 0;

    const handleAddTicket = () => {
        const currentTicketCount = eventTickets[eventId]?.ticketCount || 0;
        updateTickets(eventId, currentTicketCount + 1)
    }

    const handleSubtractTicket = () => {
        const currentTicketCount = eventTickets[eventId]?.ticketCount || 0;
        if (currentTicketCount > 0) { 
            updateTickets(eventId, currentTicketCount - 1)
        }
    }
    return (
        <article className="addEventBox">
            <section className="addEventInfo">
                <h2 className="addEventTitle">{event.name}</h2>
                <p className="addEventDate">{event.when.date} kl {event.when.from} - {event.when.to}</p>
            </section>
            <section className="buttonSubtractContainer">
                <button onClick={handleSubtractTicket} className="buttonSubtract">-</button>
            </section>
            <section className="addEventInfoTicketContainer">
                <p className="ticketCounter">{currentTicketCount}</p>
            </section>
            <section className="buttonAddContainer">
                <button onClick={handleAddTicket} className="buttonAdd">+</button>
            </section>
        </article>
    )
}

export default Addevent
