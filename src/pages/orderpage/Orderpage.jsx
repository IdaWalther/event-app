import Addevent from '../../components/addevent/Addevent'
import './orderpage.css'
import useTicketStore from '../../stores/ticket-store'
import { useEffect, useState } from 'react'

function Orderpage() {
    const { cart, createOrder, orders  } = useTicketStore(state => ({
        cart: state.cart,
        createOrder: state.createOrder,
        orders: state.orders
    }))

    const [cartEvents, setCartEvents] = useState([]);
    const [allTicketCost, setAllTicketCost] = useState(0);

    useEffect(() => {
        fetch('https://santosnr6.github.io/Data/events.json')
        .then(response => response.json())
        .then(data => {
            setCartEvents(data.events);
        })
    }, [])
    
    const displayCart = cartEvents.filter(event => cart.some(cartItem => cartItem.eventId === event.id));

    const calculateTotalCost = () => {
        let totalCost = 0;
        cart.forEach(ticket => {
            totalCost = totalCost + ticket.totalCost;
        })
        setAllTicketCost(totalCost);
    }

    useEffect(() => {
        calculateTotalCost();
    }, [cart])

    const sendOrder = () => {
        useTicketStore.getState().createOrder();
    }

    useEffect(() => {
        console.log('Orders uppdaterades:', orders);
    }, [orders]); 

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
                            <h2 className="orderpageTotalPrice">{allTicketCost} kr</h2>
                            <button onClick={sendOrder} className="orderpageButton">Skicka order</button>
                        </section>
                    </>
                    ) : ( 
                        <p className="orderpageEmpty">Din kundvagn är tom.</p>
            )}
        </section>
    )
}

export default Orderpage
