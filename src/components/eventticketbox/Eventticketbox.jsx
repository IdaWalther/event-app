import './eventticketbox.css';
import useTicketStore from '../../stores/ticket-store';
import { useEffect } from 'react';

function Eventticketbox({event}) {

    let eventId = event.id;
    let ticketPrice = event.price;

    const { eventTickets, updateTickets, addToCart, removeFromCart, cart} = useTicketStore(state => ({ 
        eventTickets: state.eventTickets,
        updateTickets: state.updateTickets,
        addToCart: state.addToCart,
        removeFromCart: state.removeFromCart,
        cart: state.cart,
    }))

    const ticketCount = eventTickets[eventId]?.ticketCount || 0;
    const totalCost = eventTickets[eventId]?.totalCost || 0;

    useEffect(() => {
        updateTickets(eventId, ticketCount, ticketPrice, totalCost)
    }, [ticketCount, totalCost])

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

export default Eventticketbox
