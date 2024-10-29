import './news.css';
import React from 'react';
import { Helmet } from 'react-helmet';

import newsImg01 from './img/news-01-01.jpg';
import newsImg02 from './img/news-02-01.jpg';
import newsImg03 from './img/news-03-01.jpg';


function News() {
    return (
        <div>
            <Helmet>
                <title>News | TID Group</title>
            </Helmet>
            <section className="news section__padding">
                <div className="container">
                    <p className="news__pretitle pretitle">NEWS</p>
                    <h3 className="news__title section__title">Writing from Company</h3>
                    <div className="news__items">
                        <a className="news__item" href="./news/news-01.html">
                            <img className="news__item-img" src={newsImg01} alt=""/>
                            <p className="news__item-category">Press release</p>
                            <p className="news__item-title">Market watch: are condos still a good investment?</p>
                            <p className="news__item-date">April 1, 2024</p>
                        </a>
                        <a className="news__item" href="./news/news-02.html">
                            <img className="news__item-img" src={newsImg02} alt=""/>
                            <p className="news__item-category">Announcement</p>
                            <p className="news__item-title">The History of Great Design: From Ancient Craftsmanship to
                                Modern Innovation</p>
                            <p className="news__item-date">April 1, 2024</p>
                        </a>
                        <a className="news__item" href="./news/news-03.html">
                            <img className="news__item-img" src={newsImg03} alt=""/>
                            <p className="news__item-category">Company news</p>
                            <p className="news__item-title">Designers Who Changed Everything: Revolutionizing the World
                                Through Innovation</p>
                            <p className="news__item-date">April 1, 2024</p>
                        </a>
                        <a className="news__item" href="./news/news-02.html">
                            <img className="news__item-img" src={newsImg02} alt=""/>
                            <p className="news__item-category">Announcement</p>
                            <p className="news__item-title">The History of Great Design: From Ancient Craftsmanship to
                                Modern Innovation</p>
                            <p className="news__item-date">April 1, 2024</p>
                        </a>
                        <a className="news__item" href="./news/news-01.html">
                            <img className="news__item-img" src={newsImg01} alt=""/>
                            <p className="news__item-category">Press release</p>
                            <p className="news__item-title">Market watch: are condos still a good investment?</p>
                            <p className="news__item-date">April 1, 2024</p>
                        </a>
                        <a className="news__item" href="./news/news-03.html">
                            <img className="news__item-img" src={newsImg03} alt=""/>
                            <p className="news__item-category">Company news</p>
                            <p className="news__item-title">Designers Who Changed Everything: Revolutionizing the World
                                Through Innovation</p>
                            <p className="news__item-date">April 1, 2024</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default News;