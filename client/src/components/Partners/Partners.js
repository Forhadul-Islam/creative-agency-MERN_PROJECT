import React from 'react';
import airbnb from '../../images/company-logos/airbnb.png';
import google from '../../images/company-logos/google.png';
import netflix from '../../images/company-logos/netflix.png';
import slack from '../../images/company-logos/slack.png';
import uber from '../../images/company-logos/uber.png';

const Partners = () => (
    <div className="partners">
        <img className="partners__item" src={airbnb} alt="" />
        <img className="partners__item" src={google} alt="" />
        <img className="partners__item" src={netflix} alt="" />
        <img className="partners__item" src={slack} alt="" />
        <img className="partners__item" src={uber} alt="" />
    </div>
);

export default Partners;
