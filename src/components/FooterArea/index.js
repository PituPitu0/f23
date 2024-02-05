import React from 'react';

import FooterCopyright from "../FooterCopyright";
import flogo from '../../doc/img/logo/footer_logo.png';




const FooterArea = ({className}) => {
   
   
    return (
        <div className={`footer footer_area1 ${className ? className : ''}`}>
            <div className="container">
                <div className="cta">
                    <div className="row">
                        <div className="col-lg-8 m-auto center">
                           
                        <img src={flogo} alt="logo"/>
                          
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