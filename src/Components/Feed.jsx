import { useState, useEffect } from "react";

const Feed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=8c629485800a49bf8457ac33ad2d825f')
      .then(response => response.json())
      .then(data => setNews(data.articles))
      .catch(error => console.error(error));
  }, []);
  return (
    <div className="flex flex-col items-center container mx-auto py-8 ml-3 mr-1.5">
      <h1 className="text-2xl font-bold mb-4">Latest News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 overflow-y-scroll h-screen shadow-2xl">
        {news.map((item, index) => (
          <div key={index} className="bg-white p-4 hover:shadow-2xl hover:shadow-gray-500">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <img className="text-xl font-bold" src={item.urlToImage} alt={item.title}/>
            <hr />
            <p className="text-black">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feed