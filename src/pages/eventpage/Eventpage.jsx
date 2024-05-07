import Searchbar from '../../components/searchbar/Searchbar';
import Eventbox from '../../components/eventbox/Eventbox';
import './eventpage.css';

function Eventpage() {
    return (
        <section className="eventpage">
            <h1 className="eventpageHeader">Events</h1>
            <Searchbar />
            <Eventbox />
        </section>
    )
}

export default Eventpage
