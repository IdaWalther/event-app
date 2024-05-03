import './searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Searchbar() {
    return (
        <div className="searchbarContainer">
             <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifyingGlass" />
            <input className="searchBar" type="text" placeholder="" />
        </div>
    )
}

export default Searchbar
