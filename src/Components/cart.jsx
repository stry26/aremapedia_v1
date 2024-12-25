const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity }) => {
    return (
      <div className="h-screen  w-full flex flex-col gap-2">
        <h2 className="text-xl font-bold mb-4">Keranjang Belanja</h2>
        
        {cartItems.length > 0 ? (
          <ul className="flex overflow-y-auto flex-col gap-2 ">
            
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
              </div>
            ))}
          </ul>
        ) : (
          <div className="rounded-xl  border flex flex-col items-center justify-start gap-8 p-3 font-bold text-gray-600  ">
            <img className="w-[60%]" src="https://cdn-icons-png.freepik.com/256/5969/5969149.png?ga=GA1.1.1953129313.1735155486&semt=ais_hybrid" alt="" />
            <p>Tidak ada tiket yang dipilih</p>
          </div>
        )}
      </div>
    );
  };
  
  export default Cart;
  