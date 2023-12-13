import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PostOnePageStrapi({ articleId }) { // Dodaj articleId jako prop
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('strapi-dt37.onrender.com/api/newss?populate=*');
      console.log('Odpowiedź z serwera:', response.data);
      setArticles(response.data.data);
    } catch (error) {
      console.log('Wystąpił błąd:', error);
    }
  };

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <div className="widget-title border-radious5 mb30 shadow7 padding20">
            <h1>
              <Link to={`/article/${article.id}`}>{article.attributes.title}</Link>
            </h1>
          </div>
          
          <div className="border-radious5 mb30 shadow7 padding20">
            <div>{article.attributes.article}</div>
          </div>
          
          <div className="border-radious5 mb30 shadow7 padding20">
            <img src={`https://strapi-dt37.onrender.com${article.attributes.image.data.attributes.url}`} alt={article.attributes.title} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostOnePageStrapi;
