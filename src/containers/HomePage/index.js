import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import FeatureNews from "../../components/FeatureNews";
import BannerSection from "../../components/BannerSection";

const HomePage = () => {
  const [featureNews, setFeatureNews] = useState([]);

  useEffect(() => {
    fetchFeatureNews();
  }, []);

  const fetchFeatureNews = async () => {
    try {
      const response = await axios.get('https://strapi-dt37.onrender.com/api/newss?populate=*');
      setFeatureNews(response.data.data);
    } catch (error) {
      console.log('Wystąpił błąd:', error);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <Fragment>
          <FeatureNews featureNews={featureNews} />
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="entertrainments">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="row">
                          <div className="col-12">
                            {/* Pozostała część komponentu */}
                          </div>
                        </div>
                        {/*CAROUSEL START*/}
                        <div className="entertrainment_carousel mb30">
                          <div className="entertrainment_item">
                            <div className="row justify-content-center">
                              {/* Pozostała część komponentu */}
                            </div>
                          </div>
                        </div>
                        {/*CAROUSEL END*/}
                        {/* Pozostała część komponentu */}
                      </div>
                      <div className="col-lg-4">
                        <div className="row">
                          <div className="col-lg-12">
                            {/* Pozostała część komponentu */}
                          </div>
                          <div className="col-lg-12">
                            {/* Pozostała część komponentu */}
                          </div>
                          <div className="col-lg-12">
                            {/* Pozostała część komponentu */}
                          </div>
                          <div className="col-lg-12">
                            {/* Pozostała część komponentu */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </div>
      
      <BannerSection/>
    </Fragment>
  );
};

export default HomePage;
