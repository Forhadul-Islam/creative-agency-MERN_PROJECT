import React from 'react';

const ContactForm = () => (
    <>
        <form className="contact-form" action="">
            <input
                className="contact-form__input"
                type="text"
                name="email"
                id=""
                placeholder="Your email address"
            />
            <input
                className="contact-form__input"
                type="text"
                name="name"
                id=""
                placeholder="Your name/ Company's name"
            />
            <textarea
                className="contact-form__input"
                placeholder="Your message"
                rows="4"
                cols="50"
            />
            <input className="contact-form__button" type="button" value="Send" />
        </form>
    </>
);

export default ContactForm;
