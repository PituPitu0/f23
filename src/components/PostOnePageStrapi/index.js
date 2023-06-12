import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostOnePageStrapi() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/newss');
      setArticles(response.data.data);
    } catch (error) {
      console.log('Wystąpił błąd:', error);
    }
  };

  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.attributes.article}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostOnePageStrapi;