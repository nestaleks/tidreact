import "./footer.css";
import logoImg from './img/logo.png';
import React from "react";

function Footer () {
    return (
        <div className="footer">
            <footer>
                <div className="footer-content">
                    <img className="footer-logo" src={logoImg} alt=""/>
                </div>
                <div className="footer-bottom">
                    <h5 className="footer__contacts-title">Stay In Touch</h5>
                    <p className="footer__contacts-text">Please feel free to contact us via the email of phone. We would
                        be happy to hear from you!</p>
                    <a className="footer__nav-phone" href="tel:+370680123456">+370 680 123456</a>
                    <a className="footer__nav-email" href="mailto:office@tidgroup.es">office@tidgroup.es</a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;