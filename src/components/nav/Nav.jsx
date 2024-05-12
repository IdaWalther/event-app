import './nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navigation">
                <NavLink to="/" className="navigationLink" activeclassname="active">
                    Home
                </NavLink>
                <NavLink to="/events" className="navigationLink" activeclassname="active">
                    Events
                </NavLink>
                <NavLink to="/order" className="navigationLink" activeclassname="active">
                    Order
                </NavLink>
                <NavLink to="/tickets" className="navigationLink" activeclassname="active">
                    Tickets
                </NavLink>
        </nav>
    )
}

export default Nav