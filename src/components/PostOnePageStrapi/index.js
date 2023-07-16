import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostOnePageStrapi() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/newss?populate=*');
      setArticles(response.data.data);
    } catch (error) {
      console.log('Wystąpił błąd:', error);
    }
  };

  return (
    <div>
      <div className="widget-title border-radious5 mb30 shadow7 padding20">
        {articles.map((article) => (
          <h1 key={article.id}>{article.attributes.title}</h1>
        ))}
      </div>

      <div className="border-radious5 mb30 shadow7 padding20">
        {articles.map((article) => (
          <div key={article.id}>{article.attributes.article}</div>
        ))}
      </div>

      <div className="border-radious5 mb30 shadow7 padding20">
        {articles.map((article) => (
          <img src={`http://localhost:1337${article.attributes.image.data.attributes.url}`} alt="krowa" />
        ))}
      </div>
    </div>
  );
}

export default PostOnePageStrapi;
