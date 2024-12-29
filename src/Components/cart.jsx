import { useState, useEffect } from "react";

const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity }) => {
  const [userDetails, setUserDetails] = useState({});
  const [savedTickets, setSavedTickets] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Index tiket yang sedang diedit

  useEffect(() => {
    // Load saved tickets from local storage
    const storedTickets = JSON.parse(localStorage.getItem("savedTickets")) || [];
    setSavedTickets(storedTickets);
  }, []);

  const handleInputChange = (e, field) => {
    setUserDetails({ ...userDetails, [field]: e.target.value });
  };

  const handleSaveTicket = (item) => {
    if (editIndex !== null) {
      // Jika sedang dalam mode edit
      const updatedTickets = [...savedTickets];
      updatedTickets[editIndex] = {
        ...savedTickets[editIndex],
        userDetails,
      };
      setSavedTickets(updatedTickets);
      localStorage.setItem("savedTickets", JSON.stringify(updatedTickets));
      setEditIndex(null); // Keluar dari mode edit
    } else {
      // Jika mode tambah baru
      const newTicket = {
        ...item,
        userDetails,
      };

      const updatedTickets = [...savedTickets, newTicket];
      setSavedTickets(updatedTickets);
      localStorage.setItem("savedTickets", JSON.stringify(updatedTickets));
    }

    setUserDetails({}); // Clear form
  };

  const handleEditTicket = (index) => {
    setEditIndex(index); // Set index tiket yang akan diedit
    setUserDetails(savedTickets[index].userDetails); // Muat data user ke form
  };

  const handleDeleteTicket = (index) => {
    const updatedTickets = savedTickets.filter((_, i) => i !== index);
    setSavedTickets(updatedTickets);
    localStorage.setItem("savedTickets", JSON.stringify(updatedTickets));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-4">Keranjang Belanja</h2>

      {cartItems.length > 0 ? (
        <ul className="flex overflow-y-auto flex-col gap-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col p-2 gap-2 justify-between items-center w-full rounded-xl border"
            >
              <div className="w-full">
                <p>
                  <span className="font-semibold">Match:</span> {item.match}
                </p>
                <p>
                  <span className="font-semibold">Kategori:</span> {item.category}
                </p>
                <p>
                  <span className="font-semibold">Harga per Tiket:</span> Rp{" "}
                  {item.price.toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold">Jumlah:</span>{" "}
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      onUpdateQuantity(item, parseInt(e.target.value, 10))
                    }
                    className="w-16 border rounded p-1"
                  />
                </p>
                <p>
                  <span className="font-semibold">Total:</span> Rp{" "}
                  {(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => onRemoveFromCart(item)}
                className="bg-red-500 w-full text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Hapus
              </button>
              <div className="flex flex-col gap-2 w-full mt-4">
                <h3 className="font-bold">Isi Data Diri</h3>
                <input
                  type="text"
                  placeholder="Nama"
                  value={userDetails.name || ""}
                  onChange={(e) => handleInputChange(e, "name")}
                  className="border p-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={userDetails.email || ""}
                  onChange={(e) => handleInputChange(e, "email")}
                  className="border p-2 rounded"
                />
                <button
                  onClick={() => handleSaveTicket(item)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  {editIndex !== null ? "Perbarui Tiket" : "Simpan Tiket"}
                </button>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <div className="rounded-xl border flex flex-col items-center justify-start gap-8 p-3 font-bold text-gray-600">
          <img
            className="w-[60%]"
            src="https://cdn-icons-png.freepik.com/256/5969/5969149.png"
            alt=""
          />
          <p>Tidak ada tiket yang dipilih</p>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Tiket Tersimpan</h3>
        {savedTickets.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {savedTickets.map((ticket, index) => (
              <li
                key={index}
                className="p-2 border rounded-xl flex justify-between items-center"
              >
                <div>
                  <p>
                    <span className="font-semibold">Match:</span> {ticket.match}
                  </p>
                  <p>
                    <span className="font-semibold">Kategori:</span>{" "}
                    {ticket.category}
                  </p>
                  <p>
                    <span className="font-semibold">Nama:</span>{" "}
                    {ticket.userDetails.name}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    {ticket.userDetails.email}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditTicket(index)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTicket(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Hapus
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Belum ada tiket yang disimpan.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
