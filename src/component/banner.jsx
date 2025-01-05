import { useState, useEffect } from "react";

const Banner = ({ onAddToCart }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("/data/tickets.json")
      .then((response) => response.json())
      .then((data) => setTickets(data))
      .catch((error) => console.error("Error fetching tickets:", error));
  }, []);

  return (
    <div className="carousel grow w-full">
      
      {tickets.map((ticket) => (
          <div
          key={ticket.id}
          className="carousel-item m-1  w-full flex justify-center items-start">
            <div className="w-[99%] bg-blue-200 min-h-[200px] rounded-xl ">
            <div className="flex flex-col p-4  gap-3  items-center">
                <p className="font-bold text-[2rem]">{ticket.venue.toUpperCase()}</p>

                <div className="flex gap-2 w-full justify-between">
                    
                    <div className="flex w-full justify-around items-center   ">
                    
                    <div className="flex flex-col gap-2 items-center">
                        <img className="h-[150px]" src={ticket.img} alt="img" />
                        <p>{ticket.team1.toUpperCase()}</p>
                    </div>

                        <img className="h-[45%]" src="https://cdn-icons-png.freepik.com/256/9150/9150765.png?semt=ais_hybrid" alt="" />

                    <div className="flex flex-col gap-2 items-center">
                        <img className=" h-[150px]" src={ticket.imglawan} alt="img" />
                        <p>{ticket.team2.toUpperCase()}</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
