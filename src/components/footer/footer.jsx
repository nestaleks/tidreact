import "./footer.css";
import logoImg from './img/logo.png';
import mailImg from './img/mail.svg'
import phoneImg from './img/phone.svg'
import React from "react";

function Footer () {
    return (
        <div className="footer">
                <div className="footer-content">
                    <img className="footer-logo" src={logoImg} alt=""/>
                </div>
                <div className="footer-bottom">
                    <h5 className="footer__contacts-title">Stay In Touch</h5>
                    <p className="footer__contacts-text">Please feel free to contact us via the email of phone. We would
                        be happy to hear from you!</p>
                    <div className="footer-bottom__contacts">
                        <div>
                            <img src={phoneImg} alt=""/>
                            <a className="footer__nav-phone" href="tel:+34654661041">+34654661041</a>
                        </div>

                        <div>
                            <img src={mailImg} alt=""/>
                            <a className="footer__nav-email" href="mailto:office@tidgroup.es">office@tidgroup.es</a>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Footer;