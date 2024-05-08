import Addevent from '../../components/addevent/Addevent'
import Nav from '../../components/nav/Nav'
import './orderpage.css'

function Orderpage() {
    return (
        <section className="orderpage">
            <h1 className="orderpageHeader">Order</h1>
            <Addevent />
            <section className="placeOrderContainer">
                <p className="orderpageTotal">Totalt värde på order</p>
                <h2 className="orderpageTotalPrice">0 kr</h2>
                <button className="orderpageButton">Skicka order</button>
            </section>
        </section>
    )
}

export default Orderpage
