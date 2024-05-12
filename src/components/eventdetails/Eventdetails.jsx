import './eventdetails.css';

function Eventdetails({event}) {
    return (
        <section className="eventDetailsSection">
            <h2 className="eventInfoPageHeader">{event.name}</h2>
            <p className="paragraphEventInfoDate">{event.when.date} kl {event.when.from} - {event.when.to} </p>
            <p className="eventInfoPageEventInfoLocation">{event.where}</p>
        </section>
    )
}

export default Eventdetails
