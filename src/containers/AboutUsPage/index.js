import React, {Fragment, useState} from 'react';
import BreadCrumb from "../../components/BreadCrumb";
import {Link} from "react-router-dom";
import {Nav, NavItem, TabContent, TabPane} from "reactstrap";

import BannerSection from "../../components/BannerSection";
import classnames from 'classnames';

// images
import banner2 from "../../doc/img/bg/sidebar-1.png";

import author1 from '../../doc/img/author/author1.png';



const AboutUsPage = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    return (
        <Fragment>
            <BreadCrumb className="shadow5" title="">
                <Fragment>
                    <div className="space-50"/>
                    <div className="row">
                        <div className="col-12">
                            <div className="author_about">
                                <div className="author_img">
                                    <div className="author_wrap">
                                        <img src={author1} alt="author1"/>
                                    </div>
                                </div>
                                <div className="author_content"><Link to="/">Równo z Górki</Link>
                                    <ul className="inline">
                                        <li>Ojciec Redaktor</li>
                                        <li>Since: Styczń 1, 2023</li>
                                    </ul>
                                </div>
                                <p>Jesteśmy :D</p>
                                <br/>
                                <p>Po wielu latach oczekiwań. W końcu rzuszamy. Portal informacyjny dla ludzi patrzących na rzeczywistość z przymróżeniem oka.</p>
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

export default AboutUsPage;