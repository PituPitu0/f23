import React  from 'react';
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
    <div className="row">
      <div className="col-12">
        <div className="single_post post_type3 mb30">
          {displayedNews.map((article) => (
            <div key={article.id}>
              <div className="card-img">
              
                <div className="img_wrap">
                  <Link to={`/post${article.id}`}>
                    {/* Użycie danych o obrazie, sprawdzenie, czy artykuł ma obraz */}
                    {article.attributes.image && (
                      <img
                        src={`https://strapi-dt37.onrender.com${article.attributes.image.data.attributes.formats.thumbnail.url}`}
                        alt={article.attributes.image.name}
                      />
                  
                    )}
                  </Link>
                </div>
              </div>
              <div className="space-20" />
              <div className="single_post_text">
                <h4>
                  <Link to={`/post${article.id}`}>{article.attributes.title}</Link>
                </h4>
                <div className="space-20" />
                <div>
                  {/* Wyświetl tylko 30 znaków z całego artykułu */}
                  <p className="post-p">
                    {truncateText(article.attributes.article, 100)}
                  </p>
                </div>
                <div className="space-20" />
                <div>
          
                  <Link className="readmore" to={`/post${article.id}`}>
                    czytaj dalej
                  </Link>
                </div>
                <div className="space-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
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
