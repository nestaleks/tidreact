import './gallery.css';
import React from 'react';
import { Helmet } from 'react-helmet';

import galleryImg01 from './img/01/gallery_01_main.jpg'
import galleryImg02 from './img/02/gallery_02_main.jpg'
import galleryImg03 from './img/03/gallery_03_main.jpg'
import galleryImg04 from './img/04/gallery_04_main.jpg'
import galleryImg05 from './img/05/gallery_05_main.jpg'
import galleryImg06 from './img/06/gallery_06_main.jpg'

function Gallery() {
    return (
        <div>
            <Helmet>
                <title>Gallery | TID Group</title>
            </Helmet>
            <section className="gallery section__padding">
                <div className="container">
                    <p className="gallery-pretitle pretitle">Gallery</p>
                    <h3 className="gallery-title section__title">Photo and video our projects</h3>
                    <p className="gallery-text">Examples of completed projects that clearly showcase our expertise,
                        craftsmanship, and high standards in construction and design.</p>
                    <div className="gallery__items">
                        <a className="gallery__item" href="./gallery/gallery_01.html">
                            <img className="gallery__item-img" src={galleryImg01} alt=""/>
                            <p className="gallery__item-title">Process planning, building or renovation old house</p>
                        </a>
                        <a className="gallery__item" href="./gallery/gallery_02.html">
                            <img className="gallery__item-img" src={galleryImg02} alt=""/>
                            <p className="gallery__item-title">Process planning, building or renovation old house</p>
                        </a>
                        <a className="gallery__item" href="./gallery/gallery_03.html">
                            <img className="gallery__item-img" src={galleryImg03} alt=""/>
                            <p className="gallery__item-title">Process planning, building or renovation old house</p>
                        </a>
                        <a className="gallery__item" href="./gallery/gallery_04.html">
                            <img className="gallery__item-img" src={galleryImg04} alt=""/>
                            <p className="gallery__item-title">Process planning, building or renovation old house</p>
                        </a>
                        <a className="gallery__item" href="./gallery/gallery_05.html">
                            <img className="gallery__item-img" src={galleryImg05} alt=""/>
                            <p className="gallery__item-title">Process planning, building or renovation old house</p>
                        </a>
                        <a className="gallery__item" href="./gallery/gallery_06.html">
                            <img className="gallery__item-img" src={galleryImg06} alt=""/>
                            <p className="gallery__item-title">Process planning, building or renovation old house</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Gallery;