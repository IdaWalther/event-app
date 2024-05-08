import Ticket from '../../components/ticket/Ticket'
import './ticketpage.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

    return (
        <section className="ticketpage">
            <Slider {...settings}>
                <Ticket />
                <Ticket />
            </Slider>
        </section>
    )
}

export default Ticketpage
