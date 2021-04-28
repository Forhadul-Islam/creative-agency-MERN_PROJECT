import React from 'react';

const ReviewForm = () => (
    <>
        <form className="review-form" action="">
            <input
                className="review-form__input"
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
            />
            <input
                className="review-form__input"
                type="text"
                name="company-name"
                id="company-name"
                placeholder="Company's name. Designation"
            />
            <textarea
                className="review-form__input"
                name="description"
                id="description"
                cols="30"
                rows="7"
                placeholder="Description"
            />
            <button className="review-form__input review-form__input--button" type="submit">
                Submit
            </button>
        </form>
    </>
);

export default ReviewForm;
