import React, {Fragment, useState} from 'react';
import BreadCrumb from "../../components/BreadCrumb";
//import {Link} from "react-router-dom";
import {Nav} from "reactstrap";

import BannerSection from "../../components/BannerSection";



import aboutus from '../../doc/img/aboutus/aboutus.jpg'


const AboutUsPage = () => {
    const [activeTab, setActiveTab] = useState('1');

    // eslint-disable-next-line no-unused-vars
    function toggle(tab) {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <Fragment>
            <BreadCrumb className="shadow5" title="O nas">
                <Fragment>
                    <div className="space-50"/>
                    <div className="row">
                        <div className="col-12">
                            <div>
                                <div>
                                    <div className="align-self-center " >
                                        <img src={aboutus} alt="aboutus"/>
                                    </div>
                                </div>
 
                                <h1>Historia</h1>
                                <br/>
                                <p>
                                Frysztak to niewielkie wieś położona w południowo-wschodniej Polsce, w województwie podkarpackim. Leży nad rzeką Wisłok, około 15 km na południowy zachód od Rzeszowa, co sprawia, że jest atrakcyjnym miejscem do życia i rozwoju gospodarczego.

                                Historia Frysztaka sięga średniowiecza, gdy w XIII wieku istniała tu osada o nazwie Frisztak, która później stała się miastem. W 1354 roku miejscowość otrzymała prawa miejskie na mocy przywileju wydanego przez króla Kazimierza Wielkiego. W kolejnych wiekach miasto rozwijało się, pełniąc funkcję lokalnego ośrodka administracyjnego, handlowego i rzemieślniczego. 
                                W XIX wieku Frysztak znalazł się pod zaborem austriackim, a po odzyskaniu niepodległości przez Polskę w 1918 roku, stał się częścią II Rzeczypospolitej. Jednakże, w 1934 roku, w wyniku pewnych przemian administracyjnych, Frysztak został zdegradowany z statusu miasta, utracił prawa miejskie i od tamtego czasu funkcjonuje jako wieś. Podczas II wojny światowej już jako wieś ucierpiał, ale po zakończeniu wojny szybko się odbudował.


                                Frysztak odznacza się malowniczym otoczeniem, w tym bliskość Pogórza Karpackiego i gór Słonnej. Dzięki temu jest również popularnym celem turystycznym, przyciągającym miłośników przyrody i aktywnego wypoczynku. W okolicy znajdują się szlaki turystyczne oraz atrakcyjne tereny do uprawiania sportów na świeżym powietrzu.

                                Wieś ma również swoje tradycje kulturowe i religijne. Znajduje się tu zabytkowy kościół parafialny pw. Wniebowzięcia NMP, który pochodzi z XVII wieku i jest przykładem architektury barokowej. Warto także zwrócić uwagę na inne zabytki, takie jak pomniki i kapliczki, które przypominają o historii i kulturze tego miejsca.

                                Frysztak to także centrum lokalnego przemysłu, w tym m.in. przemysłu spożywczego i meblarskiego. Mieszkańcy wsi utrzymują się również z rolnictwa i usług.

                                Podsumowując, Frysztak to urokliwa wieś o bogatej historii, położone w atrakcyjnym regionie przyrodniczym. Jego mieszkańcy mogą cieszyć się zarówno urokami otaczającej natury, jak i możliwościami rozwoju zawodowego i społecznego w dynamicznym środowisku.
                                </p>
            
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