import './eventdetails.css';
import useTicketStore from '../../stores/ticket-store';

function Eventdetailsaddticket({event}) {

    let eventId = event.id;
    let ticketPrice = event.price;

    const { eventTickets, updateTickets } = useTicketStore(state => ({ 
        eventTickets: state.eventTickets,
        updateTickets: state.updateTickets,
    }))

    const ticketCount = eventTickets[eventId]?.ticketCount || 0;
    const totalCost = eventTickets[eventId]?.totalCost || 0;


    const handleAddTicket = () => {
        const currentTicketCount = eventTickets[eventId]?.ticketCount || 0;
        updateTickets(eventId, currentTicketCount + 1, ticketPrice)
    }

    const handleSubtractTicket = () => {
        const currentTicketCount = eventTickets[eventId]?.ticketCount || 0;
        if (currentTicketCount > 0) { 
            updateTickets(eventId, currentTicketCount - 1, ticketPrice)
        }
    }

    return (
        <section className="addTicketsContainer">
            <section className="addTicketsPrice">
                <p className="eventInfoPrice">{totalCost} kr</p>
            </section>
            <section className="buttonSubtractContainer">
                <button onClick={handleSubtractTicket} className="buttonSubtract">-</button>
            </section>
            <section className="eventInfoTicketContainer">
                <p className="ticketCounter">{ticketCount}</p>
            </section>
            <section className="buttonAddContainer">
                <button onClick={handleAddTicket} className="buttonAdd">+</button>
            </section>
        </section>
    )
}

export default Eventdetailsaddticket
