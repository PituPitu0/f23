import React, {Fragment, useState} from 'react';
import BreadCrumb from "../../components/BreadCrumb";
import {Link} from "react-router-dom";
import {Nav} from "reactstrap";

import BannerSection from "../../components/BannerSection";


//

import author1 from '../../doc/img/author/author1.png';



const AboutUsPage = () => {
    const [activeTab, setActiveTab] = useState('1');

    // eslint-disable-next-line no-unused-vars
    function toggle(tab) {
        if (activeTab !== tab) setActiveTab(tab);
    }
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
                                <p>Historia</p>
                                <br/>
                                <p>Frysztak (niem. Freistadt) – wieś (dawne miasto) w Polsce położona w województwie podkarpackim, w powiecie strzyżowskim, w gminie Frysztak[3].

Leży na wzgórzu nad doliną Wisłoka.

Frysztak uzyskał lokację miejską w 1366 r.[4], zdegradowany w 1934 r. wraz z innymi mniejszymi miastami[5].

W latach 1954–1972 wieś należała i była siedzibą władz gromady Frysztak. W latach 1975–1998 miejscowość administracyjnie należała do województwa rzeszowskiego.

Miejscowość jest siedzibą gminy Frysztak oraz parafii Narodzenia NMP, należącej do dekanatu Frysztak, diecezji rzeszowskiej.

Prawa miejskie uzyskał w 1366 roku[4] (to wtedy Kazimierz III Wielki zezwolił na powstanie nad rzeką niezależnego miasta królewskiego pn. "Wisłok"[7]). Nazwa Frysztak (niem. "wolne miasto") świadczy o osadzeniu kolonistów niemieckich, którzy ulegli następnie procesowi polonizacji. Od 1340 roku był częścią ziemi sanockiej, od 1434 znajdował się w województwie ruskim. W 1474 Frysztak został kompletnie zniszczony przez wojska króla węgierskiego Macieja Korwina. Z czasem Frysztak odbudował się po owych zniszczeniach, stając się silnym lokalnym ośrodkiem rzemieślniczym. Pod koniec XVIII w. Ewaryst Andrzej, hr. Kuropatnicki w swym "Opisaniu królestw Galicyi i Lodomeryi" podawał: Frysztak. Dziedziczne miasto domu Sierakowskich; obfite w rzemieślników, którzy terlice, kulbaki, siodła robią; i ganczarzów[8].

W połowie czerwca 1898 roku we Frysztaku, podobnie jak w całym powiecie jasielskim i strzyżowskim, miały miejsce rozruchy antyżydowskie[9]. 16 czerwca grupa chłopów, do których przyłączyli się ludzie wychodzący z kościoła, zaczęła rabować, niszczyć i plądrować karczmy, sklepy, stragany i domy żydowskie. Pozbawiona kierownictwa żandarmeria, nie mogąc opanować sytuacji, otworzyła ogień. Na miejscu śmierć poniosło sześć osób, drugie tyle zmarło w wyniku odniesionych ran. Do tragicznego finału rozruchów przyczyniła się postawa władz lokalnych (presja wywierana na żandarmów przez kierownika starostwa Jana Winiarskiego) i odmowa uspokojenia nastrojów wśród parafian przez księdza Franciszka Prusaka[10].

W 1932 miejscowość utraciła prawa miejskie, mieszkańcy dwukrotnie – najpierw w 1952 r. i ponownie w 1975 r. – starali się o ich przywrócenie jednak bez powodzenia. Frysztak, pomimo formalnego braku praw miejskich, ma charakter małomiasteczkowy i stanowi lokalny ośrodek kulturalny i gospodarczy.

Podczas okupacji hitlerowskiej, w styczniu roku Niemcy utworzyli getto dla żydowskich mieszkańców. Przebywało w nim około 1800 Żydów. 18 sierpnia 1942 roku getto zostało zlikwidowane, a Żydzi zostali zamordowani w lesie w Warzycach, w lesie w Krajowicach koło Jasła a większość została wywieziona do obozu zagłady Bełżcu i tam zamordowana[11].</p>
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