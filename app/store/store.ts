import { create } from "zustand";
import type { Event } from "~/types/event";

type Store = {
  events: Event[];
  setEvents: (events: Event[]) => void;
  selectedEvent: Event | null;
  setSelectedEvent: (event: Event | null) => void;
  category: string;
  setCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
};

export const useStore = create<Store>((set) => ({
  events: [
    ...new Array(10).fill(0).map(
      (_, index) =>
        ({
          id: index.toString(),
          name: `Event ${index + 1}`,
          date: new Date(),
          price: 0,
          category: "Sports",
          description: "Description 1",
          coordinates: {
            latitude: (Math.random() - 0.5) * 180, // -90 to 90
            longitude: (Math.random() - 0.5) * 360, // -180 to 180
          },
        }) as Event
    ),
  ],
  setEvents: (events: Event[]) => set({ events }),
  selectedEvent: null,
  setSelectedEvent: (event: Event | null) => set({ selectedEvent: event }),
  category: "all",
  setCategory: (category: string) => set({ category }),
  sortBy: "all",
  setSortBy: (sortBy: string) => set({ sortBy }),
}));
