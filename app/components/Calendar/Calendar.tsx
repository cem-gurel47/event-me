import { useState } from "react";
import { ScrollArea } from "~/components/ui/scroll-area";
import type { Event } from "~/types/event";
import { useStore } from "~/store/store";
import cn from "classnames";

type Props = {};

export function Calendar(props: Props) {
  const [date, setDate] = useState(new Date());
  const { events, setSelectedEvent, selectedEvent } = useStore();

  return (
    <ScrollArea className="w-full rounded-lg h-[650px]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold mb-4">
            Calendar {date.toLocaleDateString()}
          </h1>
        </div>
      </div>
      <ul className="flex flex-col gap-4">
        {events.map((event: Event) => (
          <li
            key={event.id}
            className={cn(
              "p-4 rounded-sm cursor-pointer transition-all duration-150 hover:bg-gray-50",
              selectedEvent?.id === event.id && "bg-gray-200",
              "border border-gray-200"
            )}
            onClick={() => setSelectedEvent(event)}
          >
            <h1>{event.name}</h1>
            <p>{event.date.toLocaleDateString()}</p>
            <p>{event.price}</p>
            <p>{event.category}</p>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
