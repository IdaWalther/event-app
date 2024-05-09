import { create } from "zustand";

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
    addToCart: (eventId, ticketCount, ticketPrice) => set((state) => ({
        cart: [
            ...state.cart, { 
                eventId, 
                ticketCount, 
                totalCost: ticketCount * ticketPrice 
                }
            ]
        })),
}));

export default useTicketStore;