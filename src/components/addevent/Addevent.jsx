import './addevent.css'

function Addevent() {
    return (
        <article className="addEventBox">
            <section className="addEventInfo">
                <h2 className="addEventTitle">Event Title</h2>
                <p className="addEventDate">14 augusti</p>
            </section>
            <section className="buttonSubtractContainer">
                <button className="buttonSubtract">-</button>
            </section>
            <section className="addEventInfoTicketContainer">
                <p className="ticketCounter">1</p>
            </section>
            <section className="buttonAddContainer">
                <button className="buttonAdd">+</button>
            </section>
        </article>
    )
}

export default Addevent
