import React from 'react';
import { BsCloudUpload } from 'react-icons/bs';

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
                        cols="20"
                        rows="7"
                        className="add-service__form--input"
                        name="Description"
                        placeholder="Enter Description"
                    />
                </div>
            </div>
            <div className="add-service__form--icon-section">
                <div className="add-service__form--info-section--title">Icon</div>
                <label htmlFor="fileUpload" className="add-service__form--file-upload-title">
                    <BsCloudUpload style={{ paddingRight: '.3rem' }} />
                    Upload Icon
                    <input
                        id="fileUpload"
                        className="add-service__form--file-upload-button"
                        type="file"
                    />
                </label>
            </div>
        </form>
        <button className="add-service__form--button" type="button">
            Submit
        </button>
    </div>
);

export default AddService;
