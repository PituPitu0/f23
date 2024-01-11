import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const LocalNews = ({ localNews, currentPage, onPageChange }) => {
  const articlesPerPage = 3;
  const offset = currentPage * articlesPerPage;
  const displayedNews = localNews.slice(offset, offset + articlesPerPage);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  useEffect(() => {
    // Funkcja do wypisania struktury danych z API
    const logApiDataStructure = async () => {
      if (localNews.length > 0) {
        const firstArticle = localNews[0];
        const populateParam = 'article'; // Zmiana parametru 'populate' na odpowiedni dla Twojej struktury API

        // Sprawdź, czy artykuł ma obraz i pobierz pełne dane obrazu
        const fullImageData = firstArticle.attributes.image
          ? await fetchFullImage(firstArticle.attributes.image.data.id)
          : null;

        // Sprawdź, czy masz dostęp do całego API
        const response = await fetch(`https://strapi-dt37.onrender.com/api/newss/${firstArticle.id}?populate=${populateParam}`);
        const data = await response.json();

        console.log('Struktura danych z API:', data);
        console.log('Pełne dane obrazu:', fullImageData);
      }
    };

    logApiDataStructure();
  }, [localNews]);

  const fetchFullImage = async (imageId) => {
    const response = await fetch(`https://strapi-dt37.onrender.com/api/images/${imageId}`);
    const data = await response.json();
    return data;
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="single_post post_type3 post_type12 mb30">
          {displayedNews.map((article) => (
            <div key={article.id}>
              <div className="post_img">
                <div className="img_wrap">
                  <Link to={`/article/${article.id}`}>
                    {/* Użycie danych o obrazie, sprawdzenie, czy artykuł ma obraz */}
                    {article.attributes.image && (
                      <img
                        src={`https://strapi-dt37.onrender.com${article.attributes.image.url}`}
                        alt={article.attributes.image.name}
                      />
                    )}
                  </Link>
                </div>
              </div>

              <div className="single_post_text">
                <h4>
                  <Link to={`/article/${article.id}`}>{article.attributes.title}</Link>
                </h4>
                <div className="space-10" />
                <div>
                  {/* Wyświetl tylko 30 znaków z całego artykułu */}
                  <p className="post-p">
                    {truncateText(article.attributes.article[0].children[0].text, 30)}
                  </p>
                </div>
                <div className="space-20" />
                <div>
                  <Link className="readmore" to={`/article/${article.id}`}>
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
