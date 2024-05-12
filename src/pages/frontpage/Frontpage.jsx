import logo from '../../assets/logo.png'
import './frontpage.css'

function Frontpage() {
    return (
        <section className="frontPage">
            <img className="frontPageLogo" src={logo} alt="logo" />
            <h1 className="frontpageHeader">Where It's @</h1>
            <p className="frontpageParagraph">Ticketing made easy</p>
        </section>
    )
}

export default Frontpage
