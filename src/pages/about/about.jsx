import './about.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import arrowImg from './img/arrow-right.svg';
import Gallery from "../gallery/gallery";

function About() {
    return (
        <div>
            <Helmet>
                <title>About Us | TID Group</title>
            </Helmet>
            <section className="about section__padding">
                <div className="container">
                    <p className="about__pretitle pretitle">ABOUT US</p>
                    <h3 className="about__title section__title">About company</h3>
                    <p className="about__text">We specialize in the construction, sale, and renovation of residential
                        properties, offering tailored solutions that meet the diverse needs and preferences of our
                        clients. Whether you are looking to build your dream home from the ground up, renovate an
                        existing property, or invest in real estate, our experienced team is dedicated to ensuring every
                        project meets the highest standards of quality and craftsmanship. We take pride in providing
                        full support throughout the entire process, from initial consultation to project completion,
                        ensuring a seamless and stress-free experience.</p>
                    <p className="about__text">Our portfolio includes a wide range of housing options, from cozy city
                        apartments to spacious family homes, designed with modern aesthetics and functionality in mind.
                        Each property is crafted with attention to detail, creating comfortable living spaces that
                        reflect contemporary lifestyles. We prioritize sustainability and efficiency, incorporating the
                        latest building technologies and materials to ensure long-lasting value and energy savings for
                        our clients.</p>
                    <p className="about__text">At the core of our business is a commitment to customer satisfaction. Our
                        team takes a personalized approach, working closely with each client to understand their unique
                        vision and bring it to life. From choosing the perfect location and architectural design to
                        finalizing interior details, we are with you every step of the way. Join our growing community
                        of satisfied homeowners and real estate investors, and let us help you create the ideal living
                        space tailored to your needs and aspirations.</p>
                </div>
            </section>
            <section className="about__gallery section__padding">
                <div className="container">
                    <p className="about__gallery-pretitle pretitle">Gallery</p>
                    <h3 className="about__gallery-title section__title">Photo and video our projects</h3>
                    <p className="about__gallery-text">Examples of completed projects that clearly showcase our
                        expertise, craftsmanship, and high standards in construction and design.</p>
                    <div className="gallery__items">
                        <a className="gallery__item" href="./gallery/gallery_01.html">
                            <img className="gallery__item-img" src="./images/gallery/01/gallery_01_main.jpg" alt=""/>
                            <p className="gallery__item-title">Process planning, building or renovation old house</p>
                        </a>
                        <a className="gallery__item" href="./gallery/gallery_02.html">
                            <img className="gallery__item-img" src="./images/gallery/02/gallery_02_main.jpg" alt=""/>
                            <p className="gallery__item-title">Process planning, building or renovation old house</p>
                        </a>
                        <a className="gallery__item" href="./gallery/gallery_03.html">
                            <img className="gallery__item-img" src="./images/gallery/03/gallery_03_main.jpg" alt=""/>
                            <p className="gallery__item-title">Process planning, building or renovation old house</p>
                        </a>
                        <a className="gallery__item" href="./gallery/gallery_04.html">
                            <img className="gallery__item-img" src="./images/gallery/04/gallery_04_main.jpg" alt=""/>
                            <p className="gallery__item-title">Process planning, building or renovation old house</p>
                        </a>
                    </div>
                    <Link className="gallery__link" to="/gallery">
                        <p className="gallery__link-text">See all</p>
                        <img className="gallery__link-img" src={arrowImg} alt=""/>
                    </Link>
                </div>
            </section>
            <section className="news section__padding">
                <div className="container">
                    <p className="news__pretitle pretitle">NEWS</p>
                    <h3 className="news__title section__title">Writing from Company</h3>
                    <div className="news__items">
                        <a className="news__item" href="./news/news-01.html">
                            <img className="news__item-img" src="../images/news/news-01-01.jpg" alt=""/>
                            <p className="news__item-category">Press release</p>
                            <p className="news__item-title">Market watch: are condos still a good investment?</p>
                            <p className="news__item-date">April 1, 2024</p>
                        </a>
                        <a className="news__item" href="./news/news-02.html">
                            <img className="news__item-img" src="../images/news/news-02-01.jpg" alt=""/>
                            <p className="news__item-category">Announcement</p>
                            <p className="news__item-title">The History of Great Design: From Ancient Craftsmanship to
                                Modern Innovation</p>
                            <p className="news__item-date">April 1, 2024</p>
                        </a>
                        <a className="news__item" href="./news/news-03.html">
                            <img className="news__item-img" src="../images/news/news-03-01.jpg" alt=""/>
                            <p className="news__item-category">Company news</p>
                            <p className="news__item-title">Designers Who Changed Everything: Revolutionizing the World
                                Through Innovation</p>
                            <p className="news__item-date">April 1, 2024</p>
                        </a>
                    </div>
                    <Link className="news__link" to="/news">
                        <p className="news__link-text">Read all</p>
                        <img className="news__link-img" src={arrowImg} alt=""/>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default About;