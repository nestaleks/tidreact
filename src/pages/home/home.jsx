import './home.css';
import HomeTop from "../../components/hometop/hometop";

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import directionImg1 from "./img/direction-1.jpg";
import directionImg2 from "./img/direction-2.jpg";
import directionImg3 from "./img/direction-3.jpg";
import directionImg4 from "./img/direction-4.jpg";
import directionImg5 from "./img/direction-5.jpg";
import soldImg from "./img/sold.svg";
import partnerImg1 from "./img/partners-blanc-i-blanc.png";
import partnerImg2 from "./img/partners_rbk.png";


function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#projects') {
            const element = document.getElementById('projects');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);

    return (
        <div>
            <Helmet>
                <title>TID Group</title>
            </Helmet>
            <main className="main">
                <HomeTop/>
                <section className="goal section__padding">
                    <div className="container">
                        <div className="goal__inner">
                            <div className="goal__left">
                                <p className="goal__pretitle pretitle">Our goal</p>
                                <h2 className="goal__title">We are dedicated to finding a house that you'll love.</h2>
                            </div>
                            <div className="goal__right">
                                <p className="goal__text">We specialize in the construction, sale, and renovation of
                                    residential properties, as well as providing excellent opportunities for real estate
                                    investment. Our professionals ensure high-quality projects, a personalized approach,
                                    and full support at every stage of the transaction. We offer a wide range of housing
                                    options – from cozy apartments to spacious houses, creating comfortable and modern
                                    living spaces.</p>
                                <p className="goal__text">Join our satisfied clients and create your ideal home with
                                    us!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="direction section__padding">
                    <div className="container">
                        <p className="direction__pretitle pretitle">What we do</p>
                        <h3 className="direction__title section__title">Whatever the project, location, sector or
                            client, we approach it in the same way</h3>
                        <div className="direction__item">
                            <div className="direction__item-content">
                                <h4 className="direction__item-title">
                                    Design
                                </h4>
                                <h6 className="direction__item-subtitle">
                                    Individualized Approach to Design
                                </h6>
                                <p className="direction__item-text">
                                    Our team of architects and designers works with each client individually to create a
                                    unique project tailored to their preferences, needs, and budget.
                                </p>
                                <h6 className="direction__item-subtitle">
                                    Innovative Technologies and Environmental Sustainability
                                </h6>
                                <p className="direction__item-text">
                                    We constantly monitor the latest trends in construction and implement innovative
                                    technologies to create efficient and environmentally sustainable homes.
                                </p>
                                <h6 className="direction__item-subtitle">
                                    Transparency and Client Engagemen
                                </h6>
                                <p className="direction__item-text">
                                    We provide transparency in decision-making, regular updates on the progress of work,
                                    and readiness to listen to and accommodate any additional requests or changes.
                                </p>
                            </div>
                            <img className="direction__item-img" src={directionImg1} alt="Design Professionals images"/>
                        </div>
                        <div className="direction__item">
                            <img className="direction__item-img" src={directionImg2} alt="Design Professionals images"/>

                            <div className="direction__item-content">
                                <h4 className="direction__item-title">
                                    Construction
                                </h4>
                                <h6 className="direction__item-subtitle">
                                    Comprehensive Construction Services
                                </h6>
                                <p className="direction__item-text">
                                    Our company offers a full spectrum of construction services, covering everything
                                    from laying the foundation to completing the roofing.
                                </p>
                                <h6 className="direction__item-subtitle">
                                    Quality Assurance and Timely Delivery
                                </h6>
                                <p className="direction__item-text">
                                    Our experienced team meticulously oversees every phase of the construction process
                                    to maintain quality control and ensure adherence to project timelines.
                                </p>
                                <h6 className="direction__item-subtitle">
                                    Customization and Flexibility
                                </h6>
                                <p className="direction__item-text">
                                    We recognize that every homeowner has unique preferences and requirements for their
                                    dream home. That's why we prioritize customization and flexibility in our
                                    construction approach.
                                </p>
                            </div>
                        </div>
                        <div className="direction__item">
                            <div className="direction__item-content">
                                <h4 className="direction__item-title">
                                    Repair and Restoration
                                </h4>
                                <h6 className="direction__item-subtitle">
                                    Professional Repair and Restoration
                                </h6>
                                <p className="direction__item-text">
                                    We ensure high-quality execution of all tasks, including replacement of damaged
                                    structures, interior and exterior updates.
                                </p>
                                <h6 className="direction__item-subtitle">
                                    Unique Solutions and Personalization
                                </h6>
                                <p className="direction__item-text">
                                    We offer unique and individualized solutions for each repair and restoration
                                    project. We are ready to take on any challenges and implement the boldest ideas.
                                </p>
                                <h6 className="direction__item-subtitle">
                                    Efficiency and Reliability
                                </h6>
                                <p className="direction__item-text">
                                    Our team strives for impeccable quality and reliability in every detail of repair or
                                    restoration to make your home an ideal place to live again.
                                </p>
                            </div>
                            <img className="direction__item-img" src={directionImg3} alt="Design Professionals images"/>
                        </div>
                        <div className="direction__item">
                            <img className="direction__item-img" src={directionImg4} alt="Design Professionals images"/>
                            <div className="direction__item-content">
                                <h4 className="direction__item-title">
                                    Earnings
                                </h4>
                                <h6 className="direction__item-subtitle">
                                    Real Estate Purchase
                                </h6>
                                <p className="direction__item-text">
                                    We offer a wide selection of real estate properties for purchase, including
                                    residential homes, apartments, commercial spaces, and land plots. We ensure full
                                    transparency throughout the transaction process and assist you every step of the way
                                    in acquiring your dream property.
                                </p>
                                <h6 className="direction__item-subtitle">
                                    Real Estate Sales
                                </h6>
                                <p className="direction__item-text">
                                    If you have property you wish to sell, turn to us for professional assistance. We
                                    provide a comprehensive approach to selling your property, including market value
                                    assessment, development of marketing strategies, and organization of property
                                    viewings.
                                </p>
                                <h6 className="direction__item-subtitle">
                                    Real Estate Investment
                                </h6>
                                <p className="direction__item-text">
                                    Real estate is an attractive investment opportunity, and we can help you maximize
                                    your investment potential. We offer consultations on selecting promising investment
                                    properties, market analysis, and development of strategies to achieve your financial
                                    goals.
                                </p>
                            </div>
                        </div>
                        <div className="direction__item">
                            <div className="direction__item-content">
                                <h4 className="direction__item-title">
                                    Purchasing Real Estate with Cryptocurrency
                                </h4>
                                <h6 className="direction__item-subtitle">
                                    Alternative to traditional payment methods
                                </h6>
                                <p className="direction__item-text">
                                    Buying real estate with cryptocurrency offers a modern and efficient alternative to
                                    traditional payment methods.
                                </p>
                                <h6 className="direction__item-subtitle">
                                    Fast transactions
                                </h6>
                                <p className="direction__item-text">
                                    Investors are increasingly exploring the option of purchasing properties using
                                    cryptocurrencies due to their potential for quick and secure transactions.
                                </p>
                                <h6 className="direction__item-subtitle">
                                    More opportunities
                                </h6>
                                <p className="direction__item-text">
                                    The ability to buy real estate with cryptocurrency opens up new opportunities for
                                    international buyers, simplifying cross-border transactions and reducing reliance on
                                    traditional banking systems.
                                </p>
                            </div>
                            <img className="direction__item-img" src={directionImg5} alt=""/>
                        </div>
                    </div>
                </section>
                <section className="projects section__padding" id="projects">
                    <div className="container">
                        <p className="projects__pretitle pretitle">Our Projects</p>
                        <h3 className="projects__title section__title">New Construction and Property Maintenance</h3>
                        <p className="projects__text">Our completed projects showcase the full extent of our expertise,
                            highlighting the quality of our work and the meticulous attention to detail that defines our
                            approach to construction.</p>
                        <div className="projects__items">
                            <a className="projects__item projects-1" href="./projects/solivar/solivar.html">
                                <p className="projects__item-title">S’Olivar</p>
                                <p className="projects__item-subtitle">Port de Soller</p>
                                <img className="projects__item-img" src={soldImg} alt=""/>
                            </a>
                            <a className="projects__item projects-2" href="./projects/boho-corner/boho-corner.html">
                                <p className="projects__item-title">Boho Corner</p>
                                <p className="projects__item-subtitle">Palma, El Terreno</p>
                                <img className="projects__item-img" src={soldImg} alt=""/>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="inprogress section__padding">
                    <div className="container">
                        <p className="inprogress__pretitle pretitle">Projects in progress</p>
                        <h3 className="inprogress__title section__title">Objects under construction or in the design
                            phase</h3>
                        <p className="inprogress__text">Showcases our current projects that are in the process of being
                            realized. Here, you can see how our ideas are transforming into modern, high-quality
                            construction projects.</p>
                        <div className="inprogress__items">
                            <a className="inprogress__item inprogress-1" href="./projects/foners/foners.html">
                                <p className="projects__item-title">Foners</p>
                                <p className="projects__item-subtitle">Palma, Calle Foners</p>
                            </a>
                            <a className="inprogress__item inprogress-2" href="!/">
                                <p className="inprogress__item-title">SOON</p>
                            </a>
                            <a className="inprogress__item inprogress-2" href="!/">
                                <p className="inprogress__item-title">SOON</p>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="partners section__padding">
                    <div className="container">
                        <p className="partners__pretitle pretitle">Our partners</p>
                        <h3 className="partners__title section__title">Planning, designing, developing and offering real
                            estate solutions to help you achieve your goals</h3>
                        <div className="partners__inner">
                            <a className="partner__item" href="https://www.blanciblanc.com/" target="blank">
                                <img className="partner__img" src={partnerImg1} alt=""/>
                            </a>
                            <a className="partner__item" href="https://rbkprime.com/" target="blank">
                                <img className="partner__img" src={partnerImg2} alt=""/>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;