import React from 'react';

const AddService = () => (
    <div className="add-service">
        <form className="add-service__form">
            <div className="add-service__form--info-section">
                <div>
                    <div className="add-service__form--info-section--title">Service Title</div>
                    <input
                        className="add-service__form--input"
                        name="service-title"
                        placeholder="Enter Service Title"
                    />
                </div>
                <div>
                    <div className="add-service__form--info-section--title">Description</div>
                    <textarea
                        className="add-service__form--input"
                        name="Description"
                        placeholder="Enter Description"
                    />
                </div>
            </div>
            <div className="add-service__form--icon-section">
                <div className="add-service__form--info-section--title">Icon</div>
                <input className="add-service__form--file-upload-button" type="file" />
            </div>
        </form>
        <button className="add-service__form--button" type="button">
            Submit
        </button>
    </div>
);

export default AddService;
