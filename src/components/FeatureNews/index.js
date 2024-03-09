import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FeatureNews() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(3);

  useEffect(() => {
    fetchArticles();
  }, []);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  const fetchArticles = async () => {
    try {
      const response = await axios.get('https://strapi-dt37.onrender.com/api/newss?populate=*');
      const reversedArticles = response.data.data.reverse();
      setArticles(reversedArticles);
    } catch (error) {
      console.log('Wystąpił błąd:', error);
    }
  };

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };

  return (
    <div>
      
      {currentArticles.map((article) => (
        <div key={article.id}>
          <div className="widget-title border-radious5 mb30 shadow7 padding20">
            <h1>
              <Link to={`/post${article.id}`}>{article.attributes.title}</Link>
            </h1>
            <p className="post-p">
                    {truncateText(article.attributes.article, 100)}

            </p>
           
        {/*  <div className="author_about author_wrap author_img" >
            <Link to={`/post${article.id}`}>
                    {/* Użycie danych o obrazie, sprawdzenie, czy artykuł ma obraz */}
                   {/* {article.attributes.image && (
                      <img 
                        src={`https://strapi-dt37.onrender.com${article.attributes.image.data.attributes.formats.thumbnail.url}`}
                        alt={article.attributes.image.name}
                      />
                  
                    )}
                  </Link>
              </div> */}
          </div>
  
        </div>
      ))}
      <nav>
        <ul className='pagination'>
          <li className='page-item'>
            <a onClick={prevPage} href='#!' className='page-link'>
              &laquo;
            </a>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={currentPage === index + 1 ? 'page-item active' : 'page-item'}>
              <a onClick={() => paginate(index + 1)} href='#!' className='page-link'>
                {index + 1}
              </a>
            </li>
          ))}
          <li className='page-item'>
            <a onClick={nextPage} href='#!' className='page-link'>
              &raquo;
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default FeatureNews;
