import React, { useState } from 'react';
import feedbackData from '../../datas/feedback.json';
import customer from '../../images/customer-1.png';

const Feedback = () => {
    const [feedback] = useState(feedbackData);
    const FeedbackItem = ({ name, job, description }) => (
        <div className="feedback__container--item">
            <div className="feedback__container--item--top">
                <img className="feedback__container--item--top-image" src={customer} alt="" />
                <div className="feedback__container--item--top-info">
                    <div className="feedback__container--item--top-info-name">{name}</div>
                    <div className="feedback__container--item--top-info-job">{job}</div>
                </div>
            </div>
            <div className="feedback__container--item--description">{description}</div>
        </div>
    );
    return (
        <div className="feedback">
            <div className="feedback__title">
                Clients <span className="feedback__title--span">Feedback</span>
            </div>
            <div className="feedback__container">
                {feedback.map((item) => (
                    <FeedbackItem
                        key={item.name}
                        image={item.image}
                        name={item.name}
                        job={item.job}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Feedback;
