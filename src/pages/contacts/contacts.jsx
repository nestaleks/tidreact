import './contacts.css';
import React from 'react';
import { Helmet } from 'react-helmet';

import addressIcon from './img/contacts-address.svg';
import feedbackIcon from './img/contacts-feedback.svg';
import phoneIcon from './img/contacts-telephone.svg';

function Contacts() {
    return (
        <div>
            <Helmet>
                <title>Contacts | TID Group</title>
            </Helmet>
            <section className="contacts__name section__padding">
                <div className="container">
                    <h2 className="contacts__name-title">Contact Us</h2>
                    <div class="contacts__items">
                        <div class="contacts__item">
                            <div class="contacts__item-img">
                                <img src={addressIcon} alt="" />
                            </div>
                            <p class="contacts__item-title">
                                ADDRESS
                            </p>
                            <p class="contacts__item-text">Top Invest Development Group</p>
                            <p class="contacts__item-text">Palma De Mallorca</p>
                            <p class="contacts__item-text">Spain</p>
                        </div>
                        <div class="contacts__item">
                            <div class="contacts__item-img">
                                <img src={feedbackIcon} alt="" />
                            </div>
                            <p class="contacts__item-title">
                                EMAIL
                            </p>
                            <a class="contacts__item-email" href="mailto:office@tidgroup.es">office@tidgroup.es</a>
                            <a class="contacts__item-email"
                               href="mailto:pmallorca@tidgroup.es">pmallorca@tidgroup.es</a>
                            <a class="contacts__item-email"
                               href="mailto:info.mallorca@tidgroup.es">info.mallorca@tidgroup.es</a>
                        </div>
                        <div class="contacts__item">
                            <div class="contacts__item-img">
                            <img src={phoneIcon} alt="" />
                            </div>
                            <p class="contacts__item-title">
                                Phone
                            </p>
                            <a class="contacts__item-phonenumber" href="tel:+34654661041">Phone: +34654661041</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contacts;