import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FeatureNews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('https://strapi-dt37.onrender.com/api/newss?populate=*');
      // Odwracanie kolejności tablicy przed przypisaniem do stanu, 
      // aby uniknąć odwracania przy każdym renderowaniu
      const reversedArticles = response.data.data.reverse();
      setArticles(reversedArticles);
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
              <Link to={`/post${article.id}`}>{article.attributes.title}</Link>
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureNews;
