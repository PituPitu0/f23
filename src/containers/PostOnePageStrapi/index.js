import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PostOnePageStrapi() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('https://strapi-dt37.onrender.com/api/newss?populate=*');
      console.log('Odpowiedź z serwera:', response.data);
      setArticles(response.data.data);
    } catch (error) {
      console.log('Wystąpił błąd:', error);
    }
  };

  return (
    <div>
      {articles.length > 0 ? (
        articles.map((article) => (
          <div key={article.id}>
            <div className="widget-title border-radious5 mb30 shadow7 padding20">
              <h1>
                {/* Sprawdź, czy article.attributes istnieje przed próbą dostępu do właściwości */}
                {article.attributes && (
                  <Link to={`/article/${article.id}`}>{article.attributes.title}</Link>
                )}
              </h1>
            </div>

            <div className="border-radious5 mb30 shadow7 padding20">
              {/* Sprawdź, czy article.attributes.article istnieje przed próbą dostępu do właściwości */}
              <div>{article.attributes && article.attributes.article.map((paragraph) => (
                <p key={paragraph.id}>{paragraph.children[0].text}</p>
              ))}</div>
            </div>

            <div className="border-radious5 mb30 shadow7 padding20">
              {/* Sprawdź, czy article.attributes.image istnieje przed próbą dostępu do właściwości */}
              {article.attributes && article.attributes.image && (
                <img
                  src={`https://strapi-dt37.onrender.com${article.attributes.image.url}`}
                  alt={article.attributes.title}
                />
              )}
            </div>
          </div>
        ))
      ) : (
        <p>Brak dostępnych artykułów.</p>
      )}
    </div>
  );
}

export default PostOnePageStrapi;

