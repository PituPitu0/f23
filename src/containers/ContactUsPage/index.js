import React, {Fragment, Component} from 'react';
import BannerSection from "../../components/BannerSection";

class ContactUsPage extends Component {
 
    render() {
       
        return (
            <Fragment>
                <div className="col-12">
                      <div className="container">
                        <div className="inner_wrap">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="h2">
                                        <h6>Kontakt</h6>
                                        <h1>Napisz do nas</h1>
                                        <h2>Frysztak23pl@gmail.com</h2>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
               
                </div>
                       {/*contact form area*/}
                <div className="contact_form padding-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="map">
                                    <iframe
                                        title="map"
                                        frameBorder={0}
                                        height="450px"
                                        width="100%"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10292.315097161949!2d21.601650838385936!3d49.8409773586769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dad1830e3d2e7%3A0x361d405ee5589aba!2s38-130%20Frysztak!5e0!3m2!1spl!2spl!4v1647900838240!5m2!1spl!2spl"
                                        allowFullScreen/>
                                </div>
                            </div>
                        </div>
                                  
                    </div>
                </div>
                <BannerSection/>
            </Fragment>
        )
    }
}

export default ContactUsPage;