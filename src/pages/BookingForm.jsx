import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BookingForm() {
  const { showId } = useParams();
  const [show, setShow] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState("");

  useEffect(() => {
    fetch(`https://cinema-api.henrybergstrom.com/api/v1/shows/${showId}`)
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, [showId]);

  if (!show) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen text-white flex flex-col items-center">
      <div className="bg-black gap-1 rounded-3xl py-8 px-16 flex flex-col w-full max-w-lg">
        <h3 className="font-bold text-lg">{show.movie.title.toUpperCase()}</h3>
        <p>
          Date:{" "}
          {new Date(show.startTime).toLocaleDateString("sv-SE", {
            month: "2-digit",
            day: "2-digit",
          })}
        </p>
        <p>
          Starts at:{" "}
          {new Date(show.startTime).toLocaleTimeString("sv-SE", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p>Salon: {show.roomNumber}</p>
        <p>Price: {show.pricePerSeat} SEK</p>
        <p className="text-gray-400">
          Available seats: {show.availableSeats.length}
        </p>

        {/* Booking Form */}
        <form className="flex flex-col gap-2 mt-4">
          <label htmlFor="name" className="mb-2">
            Name: <br />
            <input
              type="text"
              id="name"
              name="name"
              className="mt-2 p-1.5 w-full border-gray-400 border rounded bg-black text-white"
            />
          </label>

          <label htmlFor="email" className="mb-2">
            Email: <br />
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 p-1.5 w-full border-gray-400 border rounded bg-black text-white"
            />
          </label>

          <label htmlFor="seats" className="mb-2">
            Select seat: <br />
            <select
              id="seats"
              name="seats"
              value={selectedSeat}
              onChange={(e) => setSelectedSeat(e.target.value)}
              className="mt-2 p-1.5 w-full border-gray-400 border rounded bg-black text-white"
            >
              <option value="" disabled>
                -- Select a seat --
              </option>
              {show.availableSeats.map((seat) => (
                <option key={seat} value={seat}>
                  {seat}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            disabled={!selectedSeat}
            className="buy-tickets-button mt-4 font-bold bg-red-500 text-black px-4 py-2 rounded disabled:opacity-50"
          >
            CONFIRM BOOKING
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
