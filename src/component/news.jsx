import React, { useEffect, useState } from "react";

const News = () => {
  const [newsList, setNewsList] = useState([]); 
  const [visibleCount, setVisibleCount] = useState(3); //3 berita

  useEffect(() => {
    fetch("/data/news.json")
      .then((response) => response.json())
      .then((data) => setNewsList(data))
      .catch((error) => console.error("Failed to load news data:", error));
  }, []);

  // nambah 3 berita
  const handleViewAll = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">
          Arema Terkini
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.slice(0, visibleCount).map((news, index) => (
            <div
              key={index}
              className="group w-full border border-gray-300 rounded-2xl"
            >
              <div className="flex items-center">
                <img
                  src={news.image}
                  alt={news.title}
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                <span className="text-indigo-600 font-medium mb-3 block">
                  {news.date}
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  {news.title}
                </h4>
                <p className="text-gray-500 leading-6 mb-10">{news.description}</p>
                <a
                  href={news.link}
                  className="cursor-pointer text-lg text-indigo-600 font-semibold"
                >
                  Read more..
                </a>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < newsList.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleViewAll}
              className="px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;
