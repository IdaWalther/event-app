import Addevent from '../../components/addevent/Addevent'
import './orderpage.css'
import useTicketStore from '../../stores/ticket-store'

function Orderpage() {
    const { cart } = useTicketStore(state => ({ 
        cart: state.cart,
    }));

    if (cart.length > 0) {
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
    } else {
        return (
            <section className="orderpage">
                <h1 className="orderpageHeader">Order</h1>
                <p className="orderpageEmpty">Din kundvagn är tom.</p>
            </section>
        )
    }
}

export default Orderpage
