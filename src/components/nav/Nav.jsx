import './nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navigation">
                <NavLink to="/" className="navigationLink" activeClassName="active">
                    Home
                </NavLink>
                <NavLink to="/events" className="navigationLink" activeClassName="active">
                    Events
                </NavLink>
                <NavLink to="/order" className="navigationLink" activeClassName="active">
                    Order
                </NavLink>
                <NavLink to="/tickets" className="navigationLink" activeClassName="active">
                    Tickets
                </NavLink>
        </nav>
    )
}

export default Nav