import React from 'react';
import {Link} from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";

import FooterCopyright from "../FooterCopyright";
import flogo from '../../doc/img/logo/footer_logo.png';

const instagramUrl = "https://www.instagram.com/frysztak23pl";


const FooterArea = ({className}) => {
   
   
    return (
        <div className={`footer footer_area1 ${className ? className : ''}`}>
            <div className="container">
                <div className="cta">
                    <div className="row">
                        <div className="col-lg-8 m-auto center">
                           
                        <img src={flogo} alt="logo"/>
                        <div className="social2">
                                <ul className="inline">
                                    <li><Link to="#"><FontAwesome name="twitter"/></Link></li>
                                    <li><Link to="#"><FontAwesome name="facebook-f"/></Link></li>
                                    <li><Link to="#"><FontAwesome name="youtube-play"/></Link></li>
                                    <li><a href={instagramUrl}><FontAwesome name="instagram"/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 offset-lg-2 align-self-center">
                       </div>
                    </div>
             
           
               
                </div>
            </div>
            <FooterCopyright/>
        </div>
    );
};

export default FooterArea;