import './investments.css';
import React from 'react';
import { Helmet } from 'react-helmet';

import investImg1 from './img/investments-1.jpg';
import investImg2 from './img/investments-2.jpg';
import investImg3 from './img/investments-3.jpg';

function Investments() {
    return (
        <div>
            <Helmet>
                <title>Investments | TID Group</title>
            </Helmet>
            <section className="investments section__padding">
                <div className="container">
                    <div className="investments__top section__padding">
                        <div className="container">
                            <h2 className="investments__top-title">Investments</h2>
                            <p className="investments__top-subtitle">Real estate investments in Spain</p>
                            <div className="investments__item">
                                <div className="investments__item-content">
                                    <p className="investments__item-text">
                                        Investing in real estate today is considered one of the prime options for
                                        capital placement. The consistent appreciation in value of high-quality
                                        residential and commercial properties enables owners to receive guaranteed
                                        monthly profits. Furthermore, real estate investments are generally regarded as
                                        relatively stable and reliable in the long term, enhancing their appeal to those
                                        seeking to safeguard and grow their capital.
                                    </p>
                                </div>
                                <img className="investments__item-img" src={investImg1} alt="Design Professionals images"/>
                            </div>
                            <div className="investments__item">
                                <img className="investments__item-img" src={investImg2} alt="Design Professionals images"/>
                                <div className="investments__item-content">
                                    <p className="investments__item-text">
                                        There are numerous factors influencing the demand for real estate. The key ones
                                        include location, thoughtful design concept, quality of infrastructure,
                                        attractiveness of public spaces, and efficient interaction with the management
                                        company. Understanding and considering these factors are crucial for successful
                                        real estate investment, ensuring maximum attractiveness and profitability of the
                                        property.
                                    </p>
                                </div>
                            </div>
                            <div className="investments__item">
                                <div className="investments__item-content">
                                    <p className="investments__item-text">
                                        By purchasing commercial real estate in our properties, we not only offer a wide
                                        selection of investment options but also ensure convenience in renting them out.
                                        If you reside in another city or country, this process can even proceed without
                                        your direct involvement.
                                    </p>
                                </div>
                                <img className="investments__item-img" src={investImg3} alt="Design Professionals images"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Investments;