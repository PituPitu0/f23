import React from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const LocalNews = ({ localNews, currentPage, onPageChange }) => {
  const articlesPerPage = 3;
  const offset = currentPage * articlesPerPage;
  const displayedNews = localNews.slice(offset, offset + articlesPerPage);

  return (
    <div>
      {displayedNews.map((article) => (
        <div key={article.id}>
          <h2>
            <Link to={`/article/${article.id}`}>{article.attributes.title}</Link>
          </h2>
          {article.attributes.image && (
            <img
              src={`http://strapi-dt37.onrender.com${article.attributes.image.url}`}
              alt={article.attributes.title}
            />
          )}
        </div>
      ))}
      <ReactPaginate
        previousLabel={'Poprzednia'}
        nextLabel={'Następna'}
        breakLabel={'...'}
        pageCount={Math.ceil(localNews.length / articlesPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default LocalNews;
