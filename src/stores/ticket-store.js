import { create } from "zustand";
import { customAlphabet } from 'nanoid';
import { all } from "axios";

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
        const eventSections = new Map();

        const newOrder = state.cart.flatMap((ticket) => {
            const eventKey = ticket.eventId;
            let section, startSeat;

            if(!eventSections.has(eventKey)) {
                section = `Section ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
                startSeat = Math.floor(Math.random() * 100) + 1;
                eventSections.set(eventKey, { section, startSeat });
            } else {
                const savedData = eventSections.get(eventKey);
                section = savedData.section;
                startSeat = savedData.startSeat;
            }
            return Array.from({length: ticket.ticketCount}, (_, index) => {
                const seat = startSeat + index;

                return {
                    ...ticket,
                    section,
                    seat: `Seat ${seat}`,
                    orderId: nanoid(),
                }
            })
        })
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