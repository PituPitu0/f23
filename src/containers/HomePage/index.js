/* eslint-disable no-unused-vars */
import React, {Fragment} from 'react';

import FeatureNews from "../../components/FeatureNews";



const HomePage = () => {
    return (
      
        <div className="container">
        <Fragment>
            {/*<PostCarousel className="fifth_bg"/>*/}
            {/*<PostGallery className="fifth_bg"/>*/}
            <FeatureNews/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                    {/*  <TrendingNews/>*/}
                    </div>
                    <div className="col-md-12 col-lg-4">
                       {/*  <FollowUs title="Follow Us"/>*/}
                   {/*   <MostView/>*/} 
                    </div>
                </div>
            </div>
         {/* <MixCarousel className="half_bg1"/>*/} 
            
            <div className="entertrainments">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                                               </div>
                            </div>
                            {/*CAROUSEL START*/}
                            <div className="entertrainment_carousel mb30">
                                <div className="entertrainment_item">
                                    <div className="row justify-content-center">
                                  
                                    </div>
                                </div>
                            </div>
                            {/*CAROUSEL END*/}
                         {/*    <SportsNews/>
                            <div className="banner_area mt50 mb60 xs-mt60">
                                <Link to="/">
                                    <img src={banner1} alt="banner1"/>
                                </Link>
                            </div>
                          {/*  <LocalNews localNews={localNews}/>*/}
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-lg-12">
                              {/*      <MostShareWidget title="Most share"/>*/} 
                                </div>
                                <div className="col-lg-12">
                                 {/*   <UpcomingMatches/>*/}
                                </div>
                            
                                <div className="col-lg-12">
                            {/*  <CategoriesWidget/>*/} 
                                </div>
                                <div className="col-lg-12">
                                    <div className="banner2 mb30">
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-70"/>
        </Fragment>
        </div>
    );
};

export default HomePage;