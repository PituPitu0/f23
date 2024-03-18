import React from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const LocalNews = ({ localNews, currentPage, onPageChange }) => {
  const articlesPerPage = 3;
  const offset = currentPage * articlesPerPage;
  const displayedNews = localNews.slice(offset, offset + articlesPerPage);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }

    let fragment = text.substring(0, maxLength); 

    
    let lastDotIndex = fragment.lastIndexOf('.');
    if (lastDotIndex >= 90 && lastDotIndex <= maxLength) {
      return fragment.substring(0, lastDotIndex + 1);
    } else {
      
      let lastSpaceIndex = fragment.lastIndexOf(' ', maxLength);
      if (lastSpaceIndex !== -1) {
        return fragment.substring(0, lastSpaceIndex) + '...'; 
      } else {
        return text.substring(0, maxLength) + '...'; 
      }
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="businerss_news">
          <div className="row">
            <div className="col-12">
              <div className="single_post post_type3 post_type12 mb30">
                {displayedNews.map((article) => (
                  <div key={article.id}>
                    <div className="post_img">
                      <div className="img_wrap">
                        <Link to={`/post${article.id}`}>
                          {article.attributes.image && (
                            <img
                              src={`https://strapi-dt37.onrender.com${article.attributes.image.data.attributes.formats.thumbnail.url}`}
                              alt={article.attributes.image.name}
                            />
                          )}
                        </Link>
                      </div>
                    </div>
                    <div className="single_post_text">
                      <h4>
                        <Link to={`/post${article.id}`}>{article.attributes.title}</Link>
                      </h4>
                      <div>
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
                      <div className="border_black" />
                      <div className="space-20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
