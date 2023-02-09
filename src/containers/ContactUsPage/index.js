import React, {Fragment, Component} from 'react';
import BannerSection from "../../components/BannerSection";
import SimpleReactValidator from 'simple-react-validator';
import {toast} from "react-toastify";

import scrollIcon from '../../doc/img/icon/scroll.png';

class ContactUsPage extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
    }

    state = {
        name: '',
        subject: '',
        email: '',
        phone: '',
        message: '',
    };
    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    submitHandler = e => {
        e.preventDefault();
        if (this.validator.allValid()) {
            toast.success('You submitted the form and stuff!')
            this.setState({
                name: '',
                subject: '',
                email: '',
                phone: '',
                message: '',
            });
            this.validator.hideMessages()
        } else {
            toast.error('Wypełnij pola');
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
        }
    };

    render() {
        const {name, subject, email, phone, message} = this.state;
        return (
            <Fragment>
                <div className="inner inner_bg inner_overlay">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="title_inner">
                                        <h6>Kontakt</h6>
                                        <h1>Napisz do nas</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="inner_scroll">
                                <div className="scrollIcon">
                                    <img src={scrollIcon} alt="scrollIcon"/>
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
                        <div className="space-50"/>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="cotact_form">
                                    <div className="row">
                                        <div className="col-12">
                                            <h3>Piszczie do nas <br/> </h3>
                                        </div>
                                        <div className="col-12">
                                            <form onSubmit={this.submitHandler}>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <input name="name" value={name} onChange={this.changeHandler}
                                                               type="text"
                                                               placeholder="Imię"/>
                                                        {this.validator.message('Imię', name, 'required')}
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input name="subject" value={subject}
                                                               onChange={this.changeHandler} type="text"
                                                               placeholder="Temat"/>
                                                        {this.validator.message('Temat', subject, 'required')}
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input name="email" value={email} onChange={this.changeHandler}
                                                               type="email"
                                                               placeholder="Email "/>
                                                        {this.validator.message('Email', email, 'required|email')}
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input name="phone" value={phone} onChange={this.changeHandler}
                                                               type="number"
                                                               placeholder="Numer telefonu"/>
                                                        {this.validator.message('Phone', phone, 'required')}
                                                    </div>
                                                    <div className="col-12">
                                                    <textarea name="message"
                                                              value={message}
                                                              onChange={this.changeHandler}
                                                              id="message"
                                                              cols="30" rows="5"
                                                              placeholder="Twoja wiadomość"/>
                                                        {this.validator.message('Message', message, 'required')}
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="space-20"/>
                                                        <button className="cbtn1" type="submit">Wyślij Wiadomość</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
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