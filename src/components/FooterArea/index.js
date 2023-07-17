import React from 'react';

import FooterCopyright from "../FooterCopyright";





const FooterArea = ({className}) => {
   
   
    return (
        <div className={`footer footer_area1 ${className ? className : ''}`}>
            <div className="container">
                <div className="cta">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                           
                          
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