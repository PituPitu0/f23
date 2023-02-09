import React, {Fragment} from 'react';
import BreadCrumb from "../../components/BreadCrumb";
import LocalNews from "../../components/LocalNews";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import {Link} from "react-router-dom";


// images
import business1 from '../../doc/img/business/business1.jpg';
import business2 from '../../doc/img/business/business2.jpg';
import business3 from '../../doc/img/business/business3.jpg';

import BannerSection from "../../components/BannerSection";

const localNews = [
    {
        image: business1,
        category: 'uiux.subash',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…'
    },
    {
        image: business2,
        category: 'uiux.subash',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…'
    },
    {
        image: business3,
        category: 'uiux.subash',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…'
    },
   
];
const BusinessPage = () => {
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
                                        <LocalNews headerHide={true} localNews={localNews}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="cpagination">
                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination">
                                                    <li className="page-item">
                                                        <Link className="page-link" to="/" aria-label="Previous">
                                                                <span aria-hidden="true"><FontAwesome
                                                                    name="caret-left"/></span>
                                                        </Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="/">1</Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="/">..</Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="/">5</Link>
                                                    </li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="/" aria-label="Next">
                                                                <span aria-hidden="true"><FontAwesome
                                                                    name="caret-right"/></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
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

export default BusinessPage;