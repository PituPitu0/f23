import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SingleArticlePage = ({ match }) => {
  const [article, setArticle] = useState(null);
  const articleId = match.params.id;

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://strapi-dt37.onrender.com/api/news/${articleId}?populate=*`);
        console.log('Odpowiedź z serwera:', response.data);
        setArticle(response.data);
      } catch (error) {
        console.log('Wystąpił błąd:', error);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (!article) {
    return <div>Ładowanie...</div>;
  }

  return (
    <div>
      <div className="widget-title border-radious5 mb30 shadow7 padding20">
        <h1>{article.attributes.title}</h1>
      </div>
      
      <div className="border-radious5 mb30 shadow7 padding20">
        <div>{article.attributes.article}</div>
      </div>
      
      <div className="border-radious5 mb30 shadow7 padding20">
        <img src={`https://strapi-dt37.onrender.com${article.attributes.image.data.attributes.url}`} alt={article.attributes.title} />
      </div>
    </div>
  );
};

export default SingleArticlePage;
