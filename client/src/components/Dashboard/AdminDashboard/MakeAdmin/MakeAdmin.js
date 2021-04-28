import React from 'react';

const MakeAdmin = () => (
    <div className="make-admin">
        <div className="make-admin__title">Email:</div>
        <form className="make-admin__form">
            <input
                className="make-admin__form--input"
                type="email"
                id="email"
                placeholder="Example@gmail.com"
            />
            <button className="make-admin__form--button" type="button">
                Submit
            </button>
        </form>
    </div>
);

export default MakeAdmin;
