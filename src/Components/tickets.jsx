import { useState } from "react";
import TicketList from "./ticketList";
import Cart from "./cart";

const Tickets = () => {
  const [cart, setCart] = useState([]); // State untuk keranjang

  // Fungsi untuk menambah atau memperbarui tiket di keranjang
  const addToCart = (ticket) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) =>
          item.match === ticket.match && item.category === ticket.category
      );

      if (existingItem) {
        // Jika tiket sudah ada, perbarui jumlah
        return prevCart.map((item) =>
          item === existingItem
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Jika tiket baru, tambahkan ke keranjang
        return [...prevCart, { ...ticket, quantity: 1 }];
      }
    });
  };

  // Fungsi untuk menghapus tiket dari keranjang
  const removeFromCart = (ticket) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          item.match !== ticket.match || item.category !== ticket.category
      )
    );
  };

  // Fungsi untuk mengubah jumlah tiket yang dipesan
  const updateQuantity = (ticket, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.match === ticket.match && item.category === ticket.category
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <div className=" grid grid-cols-12 gap-2 p-2 justify-center items-start ">
      <TicketList onAddToCart={addToCart} />
        {/* Komponen Daftar Tiket */}
      <div className="grid xl:col-span-3  col-span-12">
        {/* Komponen Keranjang */}
        <Cart
          cartItems={cart}
          onRemoveFromCart={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </div>
  );
};

export default Tickets;
