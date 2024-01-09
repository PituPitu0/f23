import React from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const LocalNews = ({ localNews, currentPage, onPageChange }) => {
  const articlesPerPage = 3;
  const offset = currentPage * articlesPerPage;
  const displayedNews = localNews.slice(offset, offset + articlesPerPage);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <div>
      {displayedNews.map((article) => (
        <div key={article.id}>
          <h2>
            <Link to={`/article/${article.id}`}>{article.attributes.title}</Link>
          </h2>
          <div>
            {/* Wyświetl tylko 30 znaków z całego artykułu */}
            <p>{truncateText(article.attributes.article[0].children[0].text, 30)}</p>
          </div>
          <Link to={`/article/${article.id}`}>...czytaj dalej</Link>
          {/* Użycie danych o obrazie */}
          {article.attributes.image && (
            <img
              src={`https://strapi-dt37.onrender.com${article.attributes.image.url}`}
              alt={article.attributes.image.name}
            />
          )}
        </div>
      ))}
      <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={Math.ceil(localNews.length / articlesPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName={'cpagination Page navigation example pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default LocalNews;
