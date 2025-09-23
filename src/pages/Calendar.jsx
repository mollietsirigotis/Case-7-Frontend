import { useEffect, useState } from "react";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [shows, setShows] = useState([]);

  function addDays(date, days) {
    let dt = new Date(date);
    dt.setDate(dt.getDate() + days);
    return dt;
  }

  const yesterday = () => {
    setCurrentDate(addDays(currentDate, -1));
  };
  const tomorrow = () => {
    setCurrentDate(addDays(currentDate, 1));
  };

  useEffect(() => {
    fetch("https://cinema-api.henrybergstrom.com/api/v1/shows")
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center-800">
      <h1 className="text-white font-bold text-3xl mb-6">CALENDAR</h1>

      {/* Calendar Navigation div */}
      <div className="flex gap-4 w-full p-2 justify-center">
        <button
          onClick={yesterday}
          className="yesterday-button px-4 py-2 bg-red-500 text-black rounded-lg border border-black"
        >
          &#8249;
        </button>
        <div className="px-4 py-2 bg-red-500 text-black rounded-lg border border-black">
          {currentDate.toLocaleDateString()}
        </div>
        <button
          onClick={tomorrow}
          className="tomorrow-button px-4 py-2 bg-red-500 text-black rounded-lg border border-black"
        >
          &#8250;
        </button>
      </div>
      {/* Calendar Navigation End */}

      {/* Show feed div */}
      <div className="show-feed flex flex-col items-center justify-center text-white mt-6 w-full max-w-4xl">
        {shows.map((show) => (
          // Show card div
          <div
            key={show._id}
            className="show-card rounded-2xl p-4 flex flex-row gap-4 text-white bg-black max-w-150 mb-4"
          >
            {/* Movie poster */}
            <div className="flex-1">
              <img
                src={show.movie.posterUrl}
                alt={show.movie.title}
                className="h-80 object-cover"
              />
            </div>

            {/* Movie info */}
            <div className="flex flex-1 p-2 flex-col justify-between">
              <h2 className="text-xl font-bold">
                {show.movie.title.toUpperCase()}
              </h2>
              <p className="text-xs text-gray-400">
                Director: {show.movie.director}
              </p>

              <p className="text-xs mt-1 text-gray-400">
                {show.movie.description}
              </p>
              <p className="text-xs">
                Date:{" "}
                {new Date(show.startTime).toLocaleString("sv-SE", {
                  month: "2-digit",
                  day: "2-digit"
                })}{" "}
                · Starts at:{" "}
                {new Date(show.startTime).toLocaleString("sv-SE", {
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </p>

              <p className="text-xs">Duration: {show.movie.duration} min</p>

              <p className="text-xs">
                Salon: {show.roomNumber} · Price: {show.pricePerSeat} SEK
              </p>
              <button className="buy-tickets-button mt-10 mb-6 bg-red-500 text-black font-bold p-2 rounded max-w-32">
                BUY TICKET
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
