import './addevent.css'
import useTicketStore from '../../stores/ticket-store';

function Addevent({ event }) {

    const { eventTickets, updateTickets, addToCart, removeFromCart, cart } = useTicketStore(state => ({
        eventTickets: state.eventTickets,
        updateTickets: state.updateTickets,
        addToCart: state.addToCart,
        removeFromCart: state.removeFromCart,
        cart: state.cart,
    }))
    const eventId = event.id;
    const currentTicketCount = eventTickets[eventId]?.ticketCount || 0;

    const handleAddTicket = () => {
        const currentTicketCount = eventTickets[eventId]?.ticketCount || 0;
        const newTicketCount = currentTicketCount + 1;

        updateTickets(eventId, newTicketCount)

        const existingCartItem = cart.find(ticket => ticket.eventId === eventId);

        if (existingCartItem) {
            addToCart(eventId, newTicketCount, event.price)
        } else {
            addToCart(eventId, 1, event.price)
        }
    }

    const handleSubtractTicket = () => {
        const currentTicketCount = eventTickets[eventId]?.ticketCount || 0;
        if (currentTicketCount > 0) { 
            const newTicketCount = currentTicketCount - 1;
            updateTickets(eventId, newTicketCount)
            if (newTicketCount === 0) {
                removeFromCart(eventId)
            } else {
                addToCart(eventId, newTicketCount, event.price)
            }
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
