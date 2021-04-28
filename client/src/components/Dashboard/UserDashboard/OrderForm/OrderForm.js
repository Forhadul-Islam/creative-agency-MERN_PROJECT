import React from 'react';

const OrderForm = () => (
    <>
        <form className="order-form" action="">
            <input
                className="order-form__input"
                type="text"
                name="name"
                id="name"
                placeholder="Your name/ Conpany's name"
            />
            <input
                className="order-form__input"
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
            />
            <input
                className="order-form__input"
                type="text"
                name="service"
                id="service"
                placeholder="Your service name"
            />
            <textarea
                className="order-form__input"
                type="text"
                name="project-detail"
                id="project-detail"
                placeholder="Project details"
            />
            <div>
                <input
                    className="order-form__input"
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Price"
                />
                <input className="order-form__input" type="file" name="resourses" id="resourses" />
            </div>
            <button className="order-form__input order-form__input--button" type="submit">
                Send
            </button>
        </form>
    </>
);

export default OrderForm;
