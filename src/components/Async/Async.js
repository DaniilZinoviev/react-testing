import React, { useState, useEffect } from 'react'
import axios from 'axios'

const URL = 'http://hn.algolia.com/api/v1/search';

const Async = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);

  const handleFetch = async () => {
    try {
      const news = await axios.get(`${URL}?type=news`);
      setNews(news);
    } catch(e) {
      setError(true);
    }
  }

  return (
    <div>
      <button onClick={handleFetch}>
        Load news
      </button>

      {error && <span>Something went wrong!</span>}

      {news && news.map(({ id, title }) => (
        <article key={id}>
          <h2>{title}</h2>
        </article>
      ))}
    </div>
  )
}

export default Async
