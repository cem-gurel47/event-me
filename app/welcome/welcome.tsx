import { Map } from "../components/Map";
import { Calendar } from "../components/Calendar/Calendar";
import { Filters } from "../components/Filters";
import { Link } from "react-router";

export function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <header className="flex flex-col w-full border-b border-gray-200 py-4 px-4">
        <Link to="/">
          <p className="text-2xl font-bold">EventMe</p>
        </Link>
      </header>
      <main className="w-full h-full flex flex-col gap-4 px-4 flex-1 my-4">
        <div className="flex flex-col gap-4">
          <Filters />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Calendar />
          <Map />
        </div>
      </main>
      <footer className="w-full px-4 text-center py-4 border-t border-gray-200">
        <p>EventMe - All rights reserved</p>
        <p className="text-sm text-gray-500">Version 1.0.0</p>
      </footer>
    </main>
  );
}
