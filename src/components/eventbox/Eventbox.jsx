import axios from "axios";
import useTicketStore from "../../stores/ticket-store";
import { useEffect } from "react";
import './eventbox.css';

function Eventbox() {
    const {events, setEvents, isFetching, setIsFetching} = useTicketStore(state =>({
        events: state.events,
        setEvents: state.setEvents,
        isFetching: state.isFetching,
        setIsFetching: state.setIsFetching,
    }));

    useEffect(() => {
        const getEvents = () => {
            axios.get('https://santosnr6.github.io/Data/events.json')
            .then(response => {
                console.log(response.data.events);
                setEvents(response.data.events);
                setIsFetching(false);
            })
            .catch(error => {
                console.log('Error fetching events:', error);
            });
        }

        getEvents();
    }, []);

    return (
        <section className="eventContainer">
            {isFetching ? <p>Loading...</p> : events.map((event, index) => {

                const words = event.when.date.split(' ');
                const date = words[0];
                const month = words[1];
                const splitMonth = month.slice(0, 3);


                return (
                    <article key={index} className="event">
                        <section className="eventDate">
                            <p className="date">{date}</p>
                            <p className="month">{splitMonth}</p>
                        </section>
                        <section className="eventInformation">
                            <section className="eventInfo">
                                <h2 className="eventSubtitle">{event.name}</h2>
                                <p className="paragraphWhere">{event.where}</p>
                                <p className="paragraphWhen">{event.when.from} - {event.when.to}</p>
                            </section>
                            <section className="eventPrice">
                                <p>{event.price} kr</p>
                            </section>
                        </section>
                    </article>
    )})}
        </section>
    )
}

export default Eventbox;


