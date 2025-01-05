import React, { useState, useEffect } from 'react';

const AremaStore = () => {
  const [storeData, setStoreData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/store.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStoreData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-xl font-bold mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500 mt-10">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Arema FC Store</h1>
      {storeData.categories.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.products.map((product, idx) => (
              <div
                key={idx}
                className="border rounded-lg shadow-md p-4 flex flex-col items-center text-center bg-blue-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-2">{product.price}</p>
                <p className="text-gray-500 mb-4">{product.description}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-blue-500 text-white py-2 px-4 rounded bg-blue-600 transition"
                >
                  View on Shopee
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AremaStore;
