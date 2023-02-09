import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const FooterNewsCategories = () => {
    return (
        <Fragment>
            <h3 className="widget-title">News categories</h3>
            <div className="row">
                <div className="col-lg-6">
                    <ul>
                        <li><Link to="/">Politics</Link></li>
                        <li><Link to="/">Local</Link></li>
                        <li><Link to="/">TECHNOLOGY</Link></li>
 
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul>
                        <li><Link to="/">Education</Link></li>
                        <li><Link to="/">Obituaries</Link></li>
                        <li><Link to="/">Corrections</Link></li>

                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default FooterNewsCategories;