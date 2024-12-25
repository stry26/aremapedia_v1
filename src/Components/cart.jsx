const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity }) => {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Keranjang Belanja</h2>
        {cartItems.length > 0 ? (
          <ul className="space-y-2">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="p-4 border border-gray-300 rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
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
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Keranjang Anda kosong.</p>
        )}
      </div>
    );
  };
  
  export default Cart;
  