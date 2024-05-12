import './searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Searchbar() {
    return (
        <section className="searchbarContainer">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifyingGlass" />
                <input aria-label="search bar" className="searchBar" type="text" placeholder="" />
        </section>
    )
}

export default Searchbar
