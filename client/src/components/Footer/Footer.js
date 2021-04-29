import React from 'react';
import ContactForm from './ContactForm';

const Footer = () => (
    <div id="contact-us" className="footer">
        <div className="footer__main">
            <div className="footer__main--left">
                <div className="footer__main--left-title">
                    Let us handle your project, professionally.
                </div>
                <div className="footer__main--left-text">
                    With well written codes, we build amazing apps for all platforms, mobile and web
                    apps in general.
                </div>
            </div>
            <div className="footer__main--contact">
                <ContactForm />
            </div>
        </div>
        <div className="footer__bottom">copyright Orange labs {new Date().getFullYear()}</div>
    </div>
);

export default Footer;
