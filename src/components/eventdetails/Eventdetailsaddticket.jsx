import './eventdetails.css';

function Eventdetailsaddticket({event}) {
    return (
        <section className="addTicketsContainer">
            <section className="addTicketsPrice">
                <p className="eventInfoPrice">{event.price} kr</p>
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
    )
}

export default Eventdetailsaddticket
