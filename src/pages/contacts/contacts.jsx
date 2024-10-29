import './contacts.css';
import React from 'react';
import { Helmet } from 'react-helmet';

function Contacts() {
    return (
        <div>
            <Helmet>
                <title>Contacts | TID Group</title>
            </Helmet>
            <section className="contacts__name section__padding">
                <div className="container">
                    <h2 className="contacts__name-title">Contact Us</h2>
                    <div className="contacts__items">
                        <div className="contacts__item">
                            <p className="contacts__item-title">TID Group</p>
                            <p className="contacts__item-text">Palma De Mallorca
                                <br/>
                                Spain
                            </p>
                            <a className="contacts__item-phonenumber" href="tel:+*****************">Phone:+*****************</a>
                            <a className="contacts__item-phonenumber" href="tel:+*****************">Fax: +*****************</a>
                            <a className="contacts__item-email" href="mailto:office@tidgroup.es">office@tidgroup.es</a>
                        </div>
                        <div className="contacts__item">
                            <p className="contacts__item-title">Customer Support</p>
                            <a className="contacts__item-email" href="mailto:info.mallorca@tidgroup.es">info.mallorca@tidgroup.es</a>
                            <a className="contacts__item-phonenumber" href="tel:+*****************">Phone: +*****************</a>
                            <a className="contacts__item-phonenumber" href="tel:+*****************">Fax: +*****************</a>
                        </div>
                        <div className="contacts__item">
                            <p className="contacts__item-title">
                                Wholesale Inquiries
                            </p>
                            <a className="contacts__item-email"
                               href="mailto:pmallorca@tidgroup.es">pmallorca@tidgroup.es</a>
                            <a className="contacts__item-phonenumber" href="tel:+*****************">Phone: +*****************</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contacts;