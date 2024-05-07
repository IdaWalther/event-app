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
                <NavLink to="/eventinfo" className="navigationLink" activeClassName="active">
                    Event Info
                </NavLink>
        </nav>
    )
}

export default Nav