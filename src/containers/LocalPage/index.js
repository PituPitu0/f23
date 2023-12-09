import React, { Fragment, useState, useEffect } from 'react';
import BreadCrumb from "../../components/BreadCrumb";
import LocalNews from "../../components/LocalNews";
import { Link } from "react-router-dom";
import axios from 'axios';
import BannerSection from "../../components/BannerSection";

const LocalPage = () => {
  const [localNews, setLocalNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Domyślna strona to 0

  useEffect(() => {
    fetchLocalNews();
  }, []);

  const fetchLocalNews = async () => {
    try {
      const response = await axios.get('http://strapi-dt37.onrender.com/api/newss');
      setLocalNews(response.data.data);
    } catch (error) {
      console.log('Wystąpił błąd:', error);
    }
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <Fragment>
      <BreadCrumb title="Lokalne"/>
      <div className="archives padding-top-30">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8">
              <div className="businerss_news">
                <div className="row">
                  <div className="col-12 align-self-center">
                    <div className="categories_title">
                      <h5>Kategoria: <Link to="/">Lokalne</Link></h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <LocalNews
                      headerHide={true}
                      localNews={localNews}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                      articleId={true} // Przekaż prop articleId jako true
                    />
                  </div>
                </div>
                {/* Pozostała część komponentu */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-70"/>
      <BannerSection/>
    </Fragment>
  );
};

export default LocalPage;
