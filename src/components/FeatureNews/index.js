import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FeatureNews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('https://strapi-dt37.onrender.com/api/newss?populate=*');
      
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
              <a href={`/post${article.id}`}>{article.attributes.title}</a>
              {/* <a href={`/post1/${article.id}`}>{article.attributes.title}</a> */}
              {/* ver oryginal ^^ */}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureNews;
