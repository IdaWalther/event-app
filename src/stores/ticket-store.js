import { create } from "zustand";

const useTicketStore = create((set) => ({
    events: [],
    isFetching: true,
    setEvents: (newEvents) => set({ events: newEvents }),
    setIsFetching: (newIsFetching) => set({ isFetching: newIsFetching }),
}));

export default useTicketStore;