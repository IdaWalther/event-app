import Addevent from '../../components/addevent/Addevent'
import './orderpage.css'
import useTicketStore from '../../stores/ticket-store'
import { useEffect, useState } from 'react'

function Orderpage() {
    const { cart } = useTicketStore(state => ({
        cart: state.cart,
    }))

    const [cartEvents, setCartEvents] = useState([]);

    useEffect(() => {
        fetch('https://santosnr6.github.io/Data/events.json')
        .then(response => response.json())
        .then(data => {
            setCartEvents(data.events);
        })
    }, [])
    
    const displayCart = cartEvents.filter(event => cart.some(cartItem => cartItem.eventId === event.id));

    return (
        <section className="orderpage">
            <h1 className="orderpageHeader">Order</h1> 
                { cart.length > 0 ? ( 
                    <>
                        {displayCart.map((event, index) => (
                            <Addevent key={index} event={event}/>
                        ))}
                        <section className="placeOrderContainer">
                            <p className="orderpageTotal">Totalt värde på order</p>
                            <h2 className="orderpageTotalPrice"> kr</h2>
                            <button className="orderpageButton">Skicka order</button>
                        </section>
                    </>
                    ) : ( 
                        <p className="orderpageEmpty">Din kundvagn är tom.</p>
            )}
        </section>
    )
}

export default Orderpage
