import './services.css';
import React from 'react';
import { Helmet } from 'react-helmet';

import iconLandSelect from './img/land-select.svg';
import iconLandPurchase from './img/land-purchase.svg';
import iconConsult from './img/consultation.svg';
import iconPropPurchase from './img/property-purchase.svg';
import iconPropSales from './img/property-sales.svg';
import iconPropRental from './img/property-rental.svg';
import iconPropEval from './img/property-evaluation.svg';
import iconLegalSup from './img/legal-support.svg';
import iconProcSup from './img/process-support.svg';
import iconCustomConstr from './img/custom-construction.svg';
import iconRepairWorks from './img/repair-works.svg';
import iconFinancial from './img/financial-services.svg';

function Services() {
    return (
        <div>
            <Helmet>
                <title>Services | TID Group</title>
            </Helmet>
            <section className="services__name section__padding">
                <div className="container">
                    <h2 className="services__name-title">Services</h2>
                    <h3 className="services__title section__title">Simple solutions to complex problems</h3>
                    <div className="services-page__items">
                        <div className="services-page__item">
                            <img className="services-page__item-img" src={iconLandSelect} alt=""/>
                            <p className="services-page__item-title">Land Selection</p>
                            <p className="services-page__item-text">We'll find the perfect plot of land that meets your
                                needs and preferences.</p>
                        </div>
                        <div className="services-page__item">
                            <img className="services-page__item-img" src={iconLandPurchase} alt=""/>
                            <p className="services-page__item-title">Land Purchase</p>
                            <p className="services-page__item-text">Project creation, construction, sale, rental</p>
                        </div>
                        <div className="services-page__item">
                            <img className="services-page__item-img" src={iconConsult} alt=""/>
                            <p className="services-page__item-title">Consultation Services</p>
                            <p className="services-page__item-text">We offer expert consultations on all real estate and
                                investment matters.</p>
                        </div>
                        <div className="services-page__item">
                            <img className="services-page__item-img" src={iconPropPurchase} alt=""/>
                            <p className="services-page__item-title">Property Purchase</p>
                            <p className="services-page__item-text">We'll find the ideal property considering your needs
                                and budget, ensuring a secure transaction.</p>
                        </div>
                        <div className="services-page__item">
                            <img className="services-page__item-img" src={iconPropSales} alt=""/>
                            <p className="services-page__item-title">Property Sales</p>
                            <p className="services-page__item-text">We'll help sell your property on the most favorable
                                terms, attracting potential buyers and providing professional support.</p>
                        </div>
                        <div className="services-page__item">
                            <img className="services-page__item-img" src={iconPropRental} alt=""/>
                            <p className="services-page__item-title">Property Rental</p>
                            <p className="services-page__item-text">We'll find a suitable rental property based on your
                                preferences and budget, guiding you through the entire rental process.</p>
                        </div>
                        <div className="services-page__item">
                            <img className="services-page__item-img" src={iconPropEval} alt=""/>
                            <p className="services-page__item-title">Property Evaluation</p>
                            <p className="services-page__item-text">We'll conduct a thorough evaluation of your
                                property, determining its market value and investment potential.</p>
                        </div>
                        <div className="services-page__item">
                            <img className="services-page__item-img" src={iconLegalSup} alt=""/>
                            <p className="services-page__item-title">Legal Support</p>
                            <p className="services-page__item-text">Assistance with buying, selling, leasing with a full
                                service cycle</p>
                        </div>
                        <div className="services-page__item">
                            <img className="services-page__item-img" src={iconProcSup} alt=""/>
                            <p className="services-page__item-title">Process Support</p>
                            <p className="services-page__item-text">We offer full support throughout all stages of the
                                transaction, ensuring your peace of mind and confidence.</p>
                        </div>
                        <div className="services-page__item">
                            <img className="services-page__item-img" src={iconCustomConstr} alt=""/>
                            <p className="services-page__item-title">Exclusive Custom Construction</p>
                            <p className="services-page__item-text">We'll realize your dream of a custom home, providing
                                individual design and turnkey construction.</p>
                        </div>
                        <div className="services-page__item">
                            <img className="services-page__item-img" src={iconRepairWorks} alt=""/>
                            <p className="services-page__item-title">Repair Works</p>
                            <p className="services-page__item-text">We'll perform quality repairs on your property,
                                considering your preferences and adhering to deadlines.</p>
                        </div>
                        <div className="services-page__item">
                            <img className="services-page__item-img" src={iconFinancial} alt=""/>
                            <p className="services-page__item-title">Financial Services</p>
                            <p className="services-page__item-text">We offer a wide range of financial services,
                                including investment consulting.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;