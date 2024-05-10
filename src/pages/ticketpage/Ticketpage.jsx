import Ticket from '../../components/ticket/Ticket'
import './ticketpage.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useTicketStore from '../../stores/ticket-store';

function Ticketpage() {
    const settings = {
        dots: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchMove: true,
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
        accessibility: true,
        arrows: true,
    };

    const {orders} = useTicketStore(state => ({
        orders: state.orders
    }))

    return (
        <section className="ticketpage">
            <Slider {...settings}>
                {orders.map((order, index) => {
                    return <Ticket key={index} order={order} />
                })}
            </Slider>
        </section>
    )
}

export default Ticketpage
