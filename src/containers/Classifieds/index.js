import React, {Fragment} from 'react';
import BreadCrumb from "../../components/BreadCrumb";
//import {Link} from "react-router-dom";
import {Nav} from "reactstrap";

import BannerSection from "../../components/BannerSection";




const Classifieds = () => {
 
        return (
        <Fragment>
            <BreadCrumb className="shadow5" title="Ogłoszenia">
                <Fragment>
                    <div className="space-50"/>
                    <div className="row">
                        <div className="col-12">
                            <div>
                                <div>
                                   <form>
                                    <input  name='name' 
                                           
                                            type='text' 
                                            placeholder='Twoje Imię'
                                                           /> 
                                                           <input  name='phone' 
                                           
                                           type='text' 
                                           placeholder='Nr telefonu'
                                                          /> 
                                                          <input  name='contents' 
                                           
                                           type='textarea' 
                                           placeholder='Treść Ogłoszenia'
                                                          /> 
                                   </form>
                                  <button className="cbtn1" type="submit" >Wyślij</button>
                                </div>
 
                            </div>
                        </div>
                    </div>
                    <div className="space-50"/>
                </Fragment>
            </BreadCrumb>
            <div className="archives padding-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <div className="row">
                                <div className="col-10 align-self-center">
                                    <div className="about_post_list">
                                        <Nav tabs>
           
                                        </Nav>
                                    </div>
                                </div>
                                <div className="col-2 text-right align-self-center">
                            
                                </div>
                            </div>
                            <div className="about_posts_tab">
             
                            </div>
         
                        </div>
                        <div className="col-md-6 col-lg-4">
       
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-70"/>
            <BannerSection/>
        </Fragment>
    )
};

export default Classifieds; 