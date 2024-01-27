import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostOnePageStrapi() {
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
    <div className="container">
      {articles.map((article) => (
        
            
        <div key={article.id}>
          <div className="widget-title border-radious5 mb30 shadow7 padding20">
            <h1>{article.attributes.title}</h1>
          </div>
          
          <div className="border-radious5 mb30 shadow7 padding20">
            <div>{article.attributes.article2}</div>
          </div>
          
          <div className="border-radious5 mb30 shadow7 padding20">
            <img src={`https://strapi-dt37.onrender.com${article.attributes.image.data.attributes.url}`} alt="krowa" />
          </div>
           </div>
        
      ))}


    </div>
  );
}
   
   export default PostOnePageStrapi;