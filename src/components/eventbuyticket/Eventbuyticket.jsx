import './eventbuyticket.css';
import useTicketStore from '../../stores/ticket-store';

function Eventbuyticket({event}) {

    const { eventTickets, addToCart } = useTicketStore(state => ({ 
        eventTickets: state.eventTickets,
        addToCart: state.addToCart,
    }));

    const eventId = event.id;
    
    const addTicketsToOrder = () => {
        const currentTicketCount = eventTickets[eventId]?.ticketCount || 0;
        const currentTicketPrice = eventTickets[eventId]?.totalCost / currentTicketCount || 0;
        
        if (currentTicketCount > 0) {
            console.log('Tickets added to order');
            if (eventTickets[eventId]) {
                console.log('Event already in cart');
                addToCart(eventId, currentTicketCount, currentTicketPrice);
            } else {
            addToCart(eventId, currentTicketCount, currentTicketPrice);
            }
        }
    }

    return (
        <section className="bottomSection">
            <button onClick={addTicketsToOrder} className="buttonBuyTickets">Buy Tickets</button>
        </section>
    )
}

export default Eventbuyticket
