import React, { Fragment, useState } from 'react';
import BreadCrumb from "../../components/BreadCrumb";
import { Nav } from "reactstrap";
import axios from 'axios'; // Importujemy axios do wykonywania zapytań HTTP

import BannerSection from "../../components/BannerSection";

const Classifieds = () => {
    // Stan do przechowywania danych z formularza
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        contents: ''
    });

    // Funkcja obsługująca zmianę danych formularza
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    // Funkcja obsługująca wysłanie formularza
    const onSubmit = async e => {
        e.preventDefault(); // Zapobiegamy domyślnej akcji formularza

        try {
            // Wysyłamy dane z formularza do API Strapi
            const res = await axios.post('http://localhost:1337/api/forms', formData);
            console.log(res.data); // Wyświetlamy odpowiedź z API (możemy również obsłużyć ją w inny sposób)

            // Opcjonalnie: wyczyść formularz po wysłaniu
            setFormData({
                firstname: '',
                phone: '',
                contents: ''
            });

            alert('Ogłoszenie zostało wysłane!');
        } catch (err) {
            console.error(err.response.data);
            alert('Wystąpił błąd. Spróbuj ponownie.');
        }
    };

    return (
        <Fragment>
            <BreadCrumb className="shadow5" title="Ogłoszenia">
                <Fragment>
                    <div className="space-50"/>
                    <div className="row">
                        <div className="col-12">
                            <div>
                                <div>
                                    <form onSubmit={e => onSubmit(e)}>
                                        <input
                                            name='name'
                                            type='text'
                                            placeholder='Twoje Imię'
                                            value={formData.firstname}
                                            onChange={e => onChange(e)}
                                        />
                                        <input
                                            name='phone'
                                            type='text'
                                            placeholder='Nr telefonu'
                                            value={formData.phone}
                                            onChange={e => onChange(e)}
                                        />
                                        <textarea
                                            name='contents'
                                            placeholder='Treść Ogłoszenia'
                                            value={formData.contents}
                                            onChange={e => onChange(e)}
                                        />
                                        <button className="cbtn1" type="submit">Wyślij</button>
                                    </form>
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
                                            {/* Tutaj możemy dodać zakładki ogłoszeń, jeśli chcemy */}
                                        </Nav>
                                    </div>
                                </div>
                                <div className="col-2 text-right align-self-center">
                                    {/* Dodatkowe elementy, jeśli są potrzebne */}
                                </div>
                            </div>
                            <div className="about_posts_tab">
                                {/* Tutaj będziemy wyświetlać pobrane ogłoszenia z Strapi */}
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            {/* Opcjonalnie: dodatkowe elementy, jeśli są potrzebne */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-70"/>
            <BannerSection/>
        </Fragment>
    );
};

export default Classifieds;
