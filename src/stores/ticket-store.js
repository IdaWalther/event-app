import { create } from "zustand";
import { customAlphabet } from 'nanoid';

const alpabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nanoid = customAlphabet(alpabet, 5);

const useTicketStore = create((set) => ({
    events: [],
    isFetching: true,
    setEvents: (newEvents) => set({ events: newEvents }),
    setIsFetching: (newIsFetching) => set({ isFetching: newIsFetching }),

    eventTickets: {},
    updateTickets: (eventId, ticketCount, ticketPrice) => set((state) => ({
        eventTickets: {
            ...state.eventTickets,
            [eventId]: {
                ticketCount,
                totalCost: ticketCount * ticketPrice
            }
        }
    })),
    cart: [],
    addToCart: (eventId, ticketCount, ticketPrice) => set((state) => {
        const cartIndex = state.cart.findIndex(ticket => ticket.eventId === eventId);
        let newCart = [...state.cart];
        if (cartIndex !== -1) {
            newCart[cartIndex] = {
                ...newCart[cartIndex],
                ticketCount: ticketCount,
                totalCost: ticketCount * ticketPrice
            }
        } else {
            newCart = [
                ...newCart, {
                    eventId,
                    ticketCount,
                    totalCost: ticketCount * ticketPrice
                }
            ]
        }
        return { cart: newCart }
    }),
    removeFromCart: (eventId) => set((state) => ({
        cart: state.cart.filter(ticket => ticket.eventId !== eventId)
    })),
    orders: [],
    createOrder: () => set((state) => {
        let sectionCounter = 0;
        let seatCounter = 1;

        const newOrder = state.cart.reduce((acc, ticket) => {
            for (let i = 0; i < ticket.ticketCount; i++) {
                if (seatCounter > 100) {
                    sectionCounter++;
                    seatCounter = 1;
                }
                const sectionLetter = String.fromCharCode(65 + sectionCounter);

                acc.push({
                    ...ticket,
                    section: `Section ${sectionLetter}`,
                    seat: `Seat ${seatCounter}`,
                    barcode: nanoid(),
                    orderId: nanoid()
                });
                seatCounter++;
            }
            return acc;
        }, [])
        return {
            orders: [
                ...state.orders,
                ...newOrder
            ],
            cart: []
        }
    }),
}));

export default useTicketStore;