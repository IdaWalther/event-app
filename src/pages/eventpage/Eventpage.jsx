import Searchbar from '../../components/searchbar/Searchbar';
import Eventbox from '../../components/searchbar/eventbox/Eventbox';
import './eventpage.css';

function Eventpage() {
    return (
        <div className="eventpage">
            <h1 className="eventpageHeader">Events</h1>
            <Searchbar />
            <Eventbox />
        </div>
    )
}

export default Eventpage
