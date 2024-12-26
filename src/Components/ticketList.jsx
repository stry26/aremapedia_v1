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
    <div className="grid col-span-12 gap-2 xl:col-span-9">
      <h2 className="text-xl font-bold mb-4">Daftar Tiket</h2>
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="flex flex-col justify-center items-center gap-1 border rounded-xl p-2">

            <div className="flex flex-col gap-1 justify-center items-center w-full rounded-xl bg-blue-200">
              <h3 className="text-[1rem] md:text-[3rem] font-bold">{ticket.match}</h3>
              <div className="flex gap-3 w-full justify-center items-center">
                <img className="w-[25%]  " src={ticket.img} alt="img" />
                <img className="w-[15%]  " src="https://cdn-icons-png.freepik.com/256/9150/9150765.png?semt=ais_hybrid" alt="" />
                <img className="w-[25%]  " src={ticket.imglawan} alt="img" />
              </div>
              <p className="font-bold text-[1.3rem]">{ticket.venue}</p>
            </div>

          
          <ul className="grid  p-2 bg-lime-300  items-start justify-items-center grid-cols-12  w-full gap-2">
            
            {ticket.categories.map((category, index) => (
              <div key={index} className="border bg-blue-200  w-full xs:col-span-12 sm:col-span-4 lg:col-span-3 xl:col-span-3 2xl:col-span-2  justify-between  p-2 gap-2 flex flex-col rounded-xl">
                
                {/* Img club match */}
                
                <span className="font-bold items-center flex gap-2 ">
                  <img className="w-[25px]" src="https://img.icons8.com/?size=100&id=119&format=png&color=228BE6" alt="" />
                  {category.name}
                </span>

                <span className="font-bold items-center flex gap-2 ">
                  <img className="w-[25px]" src="https://img.icons8.com/?size=100&id=FWRmg3d3z5IQ&format=png&color=228BE6" alt="" />
                  Rp{category.price.toLocaleString()} -{" "}
                </span>
                
                <span className=" font-bold flex items-center gap-2">
                  <img className="w-[25px]" src="https://img.icons8.com/?size=100&id=3665&format=png&color=228BE6" alt="" />
                  {category.available} Tersedia 
                </span>
                

                <button
                  onClick={() =>
                    onAddToCart({
                      match: ticket.match,
                      category: category.name,
                      price: category.price
                    })
                  }
                  className="btn btn-primary w-full">
                  Add to Cart
                </button>
              </div>
            
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
};

export default TicketList;
