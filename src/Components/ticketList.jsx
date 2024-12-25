import { useState, useEffect } from "react";

const TicketList = ({ onAddToCart }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("/data/tickets.json")
      .then((response) => response.json())
      .then((data) => setTickets(data))
      .catch((error) => console.error("Error fetching tickets:", error));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Daftar Tiket</h2>
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="p-4 border border-gray-300 rounded-lg shadow-md mb-4"
        >
          <h3 className="text-lg font-semibold">{ticket.match}</h3>
          <p className="text-gray-600">{ticket.date} | {ticket.time}</p>
          <p className="text-gray-500">Lokasi: {ticket.venue}</p>
          <ul className="mt-2 space-y-2">
            {ticket.categories.map((category, index) => (
              <li key={index} className="flex items-center justify-between">
                <span>
                  {category.name}: Rp {category.price.toLocaleString()} -{" "}
                  {category.available} tiket tersedia
                </span>
                <button
                  onClick={() =>
                    onAddToCart({
                      match: ticket.match,
                      category: category.name,
                      price: category.price
                    })
                  }
                  className="ml-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
